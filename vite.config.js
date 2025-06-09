// vite 설정파일
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    // @emotion/react를 자동 임포트 해줍니다.
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
});
