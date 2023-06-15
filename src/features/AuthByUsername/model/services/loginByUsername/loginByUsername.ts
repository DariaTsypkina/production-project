import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { USER_AUTH_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { ThunkConfig } from "app/providers/StoreProvider";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkApi) => {
  const { dispatch, rejectWithValue, extra } = thunkApi;

  try {
    const response = await extra.api.post("/login", authData);

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(
      USER_AUTH_LOCALSTORAGE_KEY,
      JSON.stringify(response.data)
    );
    dispatch(userActions.setUserData(response.data));

    extra.navigate("/about");

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});

