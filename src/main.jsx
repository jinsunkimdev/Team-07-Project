import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Reset } from "./styles/Reset.jsx";
import { Variables } from "./styles/Variables.jsx";
import { Fonts } from "./styles/Fonts.jsx";
import { BrowserRouter } from "react-router-dom";
import ToastProvider from "./components/Toast/ToastProvider.jsx";
import ModalProvider from "./components/Modal/ModalProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <ToastProvider>
          <Reset />
          <Variables />
          <Fonts />
          <App />
        </ToastProvider>
      </ModalProvider>
    </BrowserRouter>
  </StrictMode>
);
