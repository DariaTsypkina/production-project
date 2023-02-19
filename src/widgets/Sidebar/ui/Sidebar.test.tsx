import { renderWithRouter } from "shared/lib/tests/renderWithRouter";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("render initial component", () => {
    const { getByTestId } = renderWithTranslation(
      renderWithRouter(<Sidebar />)
    );
    expect(getByTestId("sidebar")).toBeInTheDocument();
  });
});

