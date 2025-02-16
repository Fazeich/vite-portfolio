import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "main.tsx"),
    },
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3010",
      },
    },
  },
});
