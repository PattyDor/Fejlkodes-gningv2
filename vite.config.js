import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "src/main.jsx" // Ensure Vite recognizes main.jsx as the entry file
    },
  },
});
