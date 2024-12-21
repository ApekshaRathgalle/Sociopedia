import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import the path module for resolving aliases

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias for src directory
      scenes: path.resolve(__dirname, "src/scenes"), // Alias for scenes folder
      components: path.resolve(__dirname, "src/components"), // Alias for components folder
      assets: path.resolve(__dirname, "src/assets"), // Alias for assets
      widgets: path.resolve(__dirname, "src/scenes/widgets"), // Alias for widgets specifically
    },
  },
});
