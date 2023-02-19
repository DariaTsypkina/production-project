import { screen } from "@testing-library/react";
import { renderWithRouter } from "shared/config/tests/renderWithRouter";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  test("render initial component", () => {
    renderWithTranslation(renderWithRouter(<Navbar />));
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});

