import React from "react";
import { render } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("render initial component", () => {
    const { getByTestId } = render(<Sidebar />);
    expect(getByTestId("sidebar")).toBeInTheDocument();
  });
});

