import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const context = process.cwd();

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "vite-portfolio",
      entry: path.resolve(context, "src/main.tsx"),
    },
    rollupOptions: { input: ["./index.html"] },
  },
  plugins: [react()],
  base: "",
  resolve: {
    alias: {
      "@": path.resolve(context, "src"),
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
