import { defineConfig } from 'tsup';
// import { componentList } from "./scripts/component-list";
// import { iconList } from "./scripts/icon-list";

import { solidPlugin } from 'esbuild-plugin-solid';

export default defineConfig({
	entry: ['src/index.ts', 'src/css.ts'],
	// .concat(componentList.map((component) => `src/components/${component}.tsx`))
	// .concat(iconList.map((icon) => `src/icons/${icon}.ts`)),
	outDir: 'lib',
	splitting: false,
	sourcemap: true,
	format: ['cjs', 'esm'],
	clean: true,
	esbuildPlugins: [solidPlugin()],
	dts: {
		resolve: false,
	},
});
