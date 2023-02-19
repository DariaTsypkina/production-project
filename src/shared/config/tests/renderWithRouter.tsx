import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

export const renderWithRouter = (component: ReactNode) => (
  <MemoryRouter>{component}</MemoryRouter>
);

