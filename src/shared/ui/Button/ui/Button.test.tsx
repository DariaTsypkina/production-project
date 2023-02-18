import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("render initial component", () => {
    const { getByText } = render(<Button>test</Button>);
    expect(getByText("test")).toBeInTheDocument();
  });
});
