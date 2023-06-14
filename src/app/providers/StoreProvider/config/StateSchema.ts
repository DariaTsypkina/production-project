import {
  AnyAction,
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
  user: UserSchema;
  counter: CounterSchema;
  profile?: ProfileSchema;
  loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager
  extends ReturnType<typeof configureStore<StateSchema>> {
  reducerManager: ReducerManager;
}

export interface ReducerManager {
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  remove: (key: StateSchemaKey) => void;
  getReducerMap: () => ReducersMapObject<StateSchema>;
}
