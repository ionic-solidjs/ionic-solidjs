import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

export default defineConfig({
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
	],
	build: {
		target: 'esnext',
		lib: {
			entry: {
				index: resolve('src', 'index.ts'),
			},
			formats: ['es', 'cjs'],
		},
		outDir: 'lib',
		rollupOptions: {
			output: {
				preserveModules: true,
			},
			external: Object.keys(pkg.dependencies || {})
				.concat(Object.keys(pkg.peerDependencies || {}))
				.map((dep) => new RegExp(`^${dep}(/.*)?$`)),
		},
	},
});
