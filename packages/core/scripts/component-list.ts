import * as fs from 'node:fs';
import { createRequire } from 'node:module';
import * as path from 'node:path';

const esRequire = createRequire(
	// @ts-ignore
	import.meta.url
);

const skipComponents = new Set([
	'ion-icon',
	'ion-router',
	'ion-route',
	'ion-picker-internal',
	'ion-picker-column-internal',
]);

export const componentList = fs
	.readdirSync(path.dirname(esRequire.resolve('@ionic/core/components')))
	.filter((f) => /^ion-.+\.js$/.test(f))
	.map((f) => f.replace(/.js$/, ''))
	.filter((n) => !skipComponents.has(n));
