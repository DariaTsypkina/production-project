import { Reducer } from "@reduxjs/toolkit";
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from "app/providers/StoreProvider/config/StateSchema";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface UseDynamicModuleLoaderProps {
  reducers: ReducersList;
  removeOnUnmount?: boolean;
}

export function useDynamicModuleLoader(props: UseDynamicModuleLoaderProps) {
  const { reducers, removeOnUnmount = true } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });
    return () => {
      if (!removeOnUnmount) return;

      Object.entries(reducers).forEach(([key]: ReducersListEntry) => {
        store.reducerManager.remove(key);
        dispatch({ type: `@INIT ${key} reducer` });
      });
    };
  }, []);
}
