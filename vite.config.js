import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // Ensure Vite looks inside src/
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: "index.jsx",
    },
  },
});
