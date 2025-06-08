import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // vercel용 base url입니다.
  base: "/",
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
});
