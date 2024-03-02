import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  outDir: "docs",
  site: "https://suraj.fyi",
  devToolbar: { enabled: false },
});
