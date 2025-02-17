import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "index",
      entry: path.resolve("./", "./src/main.tsx"),
    },
    rollupOptions: { input: ["./index.html"] },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./", "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3010",
      },
    },
  },
});
