import * as fs from 'node:fs';
import { createRequire } from 'node:module';
import * as path from 'node:path';

const esRequire = createRequire(
	// @ts-ignore
	import.meta.url
);

const componentsDeclarationsPath = path.resolve(
	path.dirname(esRequire.resolve('@ionic/core')),
	'types',
	'components.d.ts'
);

fs.mkdirSync(path.resolve(__dirname, '..', '.ionic-types'), { recursive: true });

fs.copyFileSync(
	componentsDeclarationsPath,
	path.resolve(__dirname, '..', '.ionic-types', 'components.ts')
);
