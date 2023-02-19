import React from "react";
import { render } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

describe("Button", () => {
  test("render initial component", () => {
    const { getByText } = render(<Button>test</Button>);
    expect(getByText("test")).toBeInTheDocument();
  });

  test("with primary theme", () => {
    const { getByText } = render(
      <Button theme={ButtonTheme.PRIMARY}>test</Button>
    );
    expect(getByText("test")).toHaveClass("primary");
  });
});

