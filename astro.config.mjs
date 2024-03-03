import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: "docs",
  build: {
    assets: "assets",
  },
  site: "https://suraj.fyi/dailychirp",
  devToolbar: { enabled: false },
});
