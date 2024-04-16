import { defineConfig } from "tsup";
// import { componentList } from "./scripts/component-list";
// import { iconList } from "./scripts/icon-list";

// import eps from "esbuild-plugin-solid";
// let solidPlugin = eps.solidPlugin;

export default defineConfig({
  // entry: ["src/index.ts", "src/icons/index.ts"]
  // .concat(componentList.map((component) => `src/components/${component}.tsx`))
  // .concat(iconList.map((icon) => `src/icons/${icon}.tsx`)),
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  outDir: "lib",
  // legacyOutput: true,
  splitting: false,
  bundle: false,
  sourcemap: true,
  format: ["cjs", "esm"],
  clean: true,
  // esbuildPlugins: [solidPlugin()],
  // esbuildOptions: (opts) => {
  //   opts.jsx = "preserve";
  // },
  dts: {
    resolve: false,
  },
});
