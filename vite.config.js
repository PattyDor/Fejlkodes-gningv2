import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // Set src as the root directory
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: "index.jsx", // This must match the entry file
    },
  },
});
