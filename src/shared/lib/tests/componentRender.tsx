import { render, RenderResult } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";

export function componentRender(component: ReactNode): RenderResult {
  return render(
    <I18nextProvider i18n={i18nForTests}>
      <MemoryRouter>{component}</MemoryRouter>
    </I18nextProvider>
  );
}

