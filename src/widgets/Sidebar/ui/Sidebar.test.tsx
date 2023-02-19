import { MemoryRouter } from "react-router-dom";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("render initial component", () => {
    const { getByTestId } = renderWithTranslation(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(getByTestId("sidebar")).toBeInTheDocument();
  });
});

