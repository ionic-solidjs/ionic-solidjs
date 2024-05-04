import type { IonicConfig } from '@ionic/core';
import { initialize } from '@ionic/core/components';

export function setupIonicSolid(config: IonicConfig = {}) {
	/**
	 * By default Ionic Framework hides elements that
	 * are not hydrated, but in the CE build there is no
	 * hydration.
	 * TODO FW-2797: Remove when all integrations have been migrated to CE build.
	 */
	if (typeof (document as any) !== 'undefined') {
		document.documentElement.classList.add('ion-ce');
	}

	initialize({
		...config,
	});
}
