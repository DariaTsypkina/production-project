import { componentRender } from "shared/lib/tests/componentRender";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  test("render initial component", () => {
    const { getByTestId } = componentRender(<Navbar />);
    expect(getByTestId("navbar")).toBeInTheDocument();
  });
});

