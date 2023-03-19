import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  let initialState: DeepPartial<StateSchema>;
  beforeEach(() => {
    initialState = {
      counter: {
        value: 5,
      },
    };
  });

  test("render initial component", () => {
    const { getByText, getByRole } = componentRender(<Counter />, {
      initialState,
    });

    expect(getByRole("heading", { level: 1 })).toHaveTextContent("5");
    expect(getByText("increment")).toBeInTheDocument();
    expect(getByText("decrement")).toBeInTheDocument();
  });

  test("should increment", async () => {
    const { getByText, getByRole } = componentRender(<Counter />, {
      initialState,
    });

    const heading = getByRole("heading", { level: 1 });

    expect(heading).toHaveTextContent("5");
    await userEvent.click(getByText("increment"));

    expect(heading).toHaveTextContent("6");
  });

  test("should decrement", async () => {
    const { getByText, getByRole } = componentRender(<Counter />, {
      initialState,
    });

    const heading = getByRole("heading", { level: 1 });

    expect(heading).toHaveTextContent("5");
    await userEvent.click(getByText("decrement"));

    expect(heading).toHaveTextContent("4");
  });
});
