import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "src/index.jsx", // Ensures Vite knows index.jsx is the entry point
    },
  },
});
