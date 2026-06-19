import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const portfolioBuild = Boolean(process.env.VITE_PORTFOLIO_BUILD);

export default defineConfig({
  base: portfolioBuild ? "/projects/yohaku/" : "/",
  plugins: [
    react(),
    {
      name: "portfolio-public-paths",
      generateBundle(_, bundle) {
        if (!portfolioBuild) return;

        Object.values(bundle).forEach((output) => {
          if (output.type === "chunk") {
            output.code = output.code.replaceAll("/images/", "/projects/yohaku/images/");
          }
        });
      },
    },
  ],
});
