import { screen } from "@testing-library/react";
import { renderWithRouter } from "shared/lib/tests/renderWithRouter";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  test("render initial component", () => {
    renderWithTranslation(renderWithRouter(<Navbar />));
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});

