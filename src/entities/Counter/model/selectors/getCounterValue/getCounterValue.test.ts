import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("should render", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounterValue(state as StateSchema)).toBe(10);
  });
});

