import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_AUTH_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { Profile, ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  readonly: true,
  isLoading: false
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {

  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

