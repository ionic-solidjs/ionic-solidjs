import { defineConfig } from "tsup";
// import { componentList } from "./scripts/component-list";
// import { iconList } from "./scripts/icon-list";

import eps from "esbuild-plugin-solid";

export default defineConfig({
  entry: ["src/index.ts", "src/icons/index.ts"],
  // .concat(componentList.map((component) => `src/components/${component}.tsx`))
  // .concat(iconList.map((icon) => `src/icons/${icon}.tsx`)),
  outDir: "lib",
  splitting: false,
  sourcemap: true,
  format: ["cjs", "esm"],
  clean: true,
  esbuildOptions: (opts) => {
    opts.plugins = (opts.plugins || []).concat([eps.solidPugin]);
    opts.jsxImportSource = "solid-js";
    opts.jsx = "preserve";
  },
  dts: {
    resolve: false,
  },
});
