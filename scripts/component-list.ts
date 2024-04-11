import * as fs from "fs";
import { createRequire } from "module";
import * as path from "path";

let require = createRequire(import.meta.url);

let skipComponents = new Set(["ion-icon", "ion-router", "ion-route-redirect", "ion-route"]);
export let componentList = fs
  .readdirSync(path.dirname(require.resolve("@ionic/core/components")))
  .filter((f) => /^ion-.+\.js$/.test(f))
  .map((f) => f.replace(/.js$/, ""))
  .filter((n) => !skipComponents.has(n));
