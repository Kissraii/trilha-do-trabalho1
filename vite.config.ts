import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const clientRoot = path.join(projectRoot, "client");

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.join(clientRoot, "src"),
    },
  },
  root: clientRoot,
  build: {
    outDir: path.join(projectRoot, "dist"),
    emptyOutDir: true,
  },
});
