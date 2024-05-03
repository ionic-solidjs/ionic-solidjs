// import devtools from 'solid-devtools/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
	plugins: [
		// devtools({
		// 	/* features options - all disabled by default */
		// 	autoname: true, // e.g. enable autoname
		// }),
		solidPlugin(),
	],
	server: {
		port: 3003,
	},
	build: {
		target: 'esnext',
	},
});
