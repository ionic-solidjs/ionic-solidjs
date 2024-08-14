import * as icons from 'ionicons/icons/index.js';

function camelCaseToKebab(str: string) {
	return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export const iconList = Object.keys(icons)
	.map(camelCaseToKebab)
	.filter((i) => i !== 'default');

export const iconValues = Object.keys(icons).reduce((acc, key) =>
  Object.assign(acc, { [camelCaseToKebab(key)]: icons[key] }), {}
);