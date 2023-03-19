import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("render initial component", () => {
    const { getByTestId } = componentRender(<Sidebar />);
    expect(getByTestId("sidebar")).toBeInTheDocument();
  });
});
