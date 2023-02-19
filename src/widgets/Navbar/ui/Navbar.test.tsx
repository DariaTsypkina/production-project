import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  test("render initial component", () => {
    renderWithTranslation(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});

