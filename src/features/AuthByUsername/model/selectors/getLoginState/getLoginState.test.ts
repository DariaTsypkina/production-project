import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";

describe("getLoginState", () => {
  test("should return login state", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "John Doe",
        password: "123",
        isLoading: false,
        error: "",
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      username: "John Doe",
      password: "123",
      isLoading: false,
      error: "",
    });
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
