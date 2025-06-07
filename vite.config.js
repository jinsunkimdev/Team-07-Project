import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Team-07-Rolling-Github-Pages/",
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
});
