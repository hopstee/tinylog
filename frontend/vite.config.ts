import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, searchForWorkspaceRoot } from "vite";
import path from "path";

export default defineConfig({
  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        "./bindings/*",
      ],
    },
  },
  resolve: {
    alias: {
      "@tinylog/backend": path.resolve("./bindings/tinylog/backend/services"),
    },
  },
  plugins: [tailwindcss(), sveltekit()],
});
