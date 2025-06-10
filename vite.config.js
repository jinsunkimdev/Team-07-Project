// vite설정 파일입니다. 
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
});
