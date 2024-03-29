import { loginByUsername } from "./loginByUsername";
import { Dispatch } from "@reduxjs/toolkit";

import axios from "axios";
import { StateSchema } from "app/providers/StoreProvider";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("loginByUsername", () => {
  test("should login successfully", async () => {
    const userData = { username: "123", id: "1" };

    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        data: userData,
      })
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "123",
      password: "123",
    });

    // expect(mockedAxios.post).toHaveBeenCalled();
    // expect(result.meta.requestStatus).toBe("fulfilled");
    // expect(thunk.dispatch).toHaveBeenCalledWith(
    //   userActions.setUserData(userData)
    // );
    // expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    // expect(result.payload).toEqual(userData);
  });

  test("should fail login", async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "123",
      password: "123",
    });
    // expect(mockedAxios.post).toHaveBeenCalled();
    // expect(result.meta.requestStatus).toBe("rejected");
    // expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    // expect(result.payload).toBe("error");
  });
});
