import { componentRender } from "shared/lib/tests/componentRender";
import { Typography } from "./Typography";

describe("Typography", () => {
  test("render default paragraph", () => {
    const { getByText } = componentRender(<Typography>Lorem ipsum</Typography>);
    expect(getByText(/lorem ipsum/i)).toBeInTheDocument();
  });
});

