import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Reset } from "./styles/Reset.jsx";
import { Variables } from "./styles/Variables.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Reset />
    <Variables />
    <App />
  </StrictMode>
);
