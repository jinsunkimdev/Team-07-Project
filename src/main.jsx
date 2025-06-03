import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Reset } from "./styles/Reset.jsx";
import { Variables } from "./styles/Variables.jsx";
import { BrowserRouter } from "react-router-dom";
import ToastProvider from "./components/Toast/ToastProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <Reset />
      <Variables />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastProvider>
  </StrictMode>
);
