import { StoreProvider } from "app/providers/StoreProvider";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

import "./shared/config/i18n/i18n";
import "app/styles/index.scss";

render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

