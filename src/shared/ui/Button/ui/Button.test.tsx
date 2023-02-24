import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("render initial component", () => {
    const { getByText } = render(<Button>test</Button>);
    expect(getByText("test")).toBeInTheDocument();
  });

  test("with primary theme", () => {
    const { getByText } = render(<Button variant="primary">test</Button>);
    expect(getByText("test")).toHaveClass("primary");
  });
});

