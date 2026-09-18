import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://reuter.com.ar",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    resolve: {
      alias: {
        "astro/entrypoints/prerender": fileURLToPath(
          new URL("./node_modules/astro/dist/entrypoints/prerender.js", import.meta.url)
        )
      }
    }
  }
});
