import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Project Pages is served from /<repository>/, while local development and
// custom domains are served from /. Deriving this value prevents broken asset
// URLs if the repository is renamed or forked.
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = process.env.GITHUB_ACTIONS === "true" && repositoryName
  ? `/${repositoryName}/`
  : "/";

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssMinify: false,
  },
});
