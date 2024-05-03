import * as icons from 'ionicons/icons/index.js';

function camelCaseToKebab(str: string) {
	return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export const iconList = Object.keys(icons)
	.map(camelCaseToKebab)
	.filter((i) => i !== 'default');
// export let componentList = fs
//   .readdirSync(path.dirname(require.resolve("@ionic/core/components")))
//   .filter((f) => /^ion.+\.js$/.test(f))
//   .map((f) => f.replace(/.js$/, ""))
//   .filter((n) => n !== "ion-icon");
