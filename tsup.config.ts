import { defineConfig } from "tsup";
import { componentList } from "./scripts/component-list";
import { iconList } from "./scripts/icon-list";

export default defineConfig({
  entry: ["src/index.ts", "src/icons/index.ts"],
  // .concat(componentList.map((component) => `src/components/${component}.tsx`))
  // .concat(iconList.map((icon) => `src/icons/${icon}.tsx`)),
  outDir: "lib",
  splitting: false,
  sourcemap: true,
  format: ["cjs", "esm"],
  clean: true,
  dts: {
    resolve: false,
  },
});
