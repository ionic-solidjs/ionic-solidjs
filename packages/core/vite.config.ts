import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import solidPlugin from 'vite-plugin-solid';
import pkg from './package.json';

export default defineConfig({
	plugins: [
		solidPlugin({ solid: { generate: 'dom' } }),
		dts({
			insertTypesEntry: true,
		}),
	],
	build: {
		target: 'esnext',
		lib: {
			entry: {
				index: resolve('src', 'index.ts'),
				css: resolve('src', 'css.ts'),
			},
			formats: ['es', 'cjs'],
		},
		outDir: 'lib',
		rollupOptions: {
			external: Object.keys(pkg.dependencies || {})
				.concat(Object.keys(pkg.peerDependencies || {}))
				.map((dep) => new RegExp(`^${dep}(/.*)?$`)),
		},
	},
});
