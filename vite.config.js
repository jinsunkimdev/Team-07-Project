import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // base url
  // vercel용 base url입니다.
  base: "/",
  plugins: [
    // @emotion/react를 자동 임포트 해줍니다.
    // 일일이 적어주지 않아도 됩니다.
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
});
