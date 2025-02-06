import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { LIGHT_THEME } from "./lib/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
