import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: "docs",
  site: "https://suraj.fyi/dailychirp",
  base: "/dailychirp",
  devToolbar: { enabled: false },
  vite: {
    base: "https://suraj.fyi/dailychirp",
  },
  build: {
    assets: "assets",
  },
});
