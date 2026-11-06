import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Relative base + HashRouter => works on GitHub Pages under /QAPortfolio/ with no 404 hacks.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
