import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import type { LayoutLoad } from './$types';

export const load = (async (event) => {
	const { locale } = event.data;
	console.log('🚀 ~ file: +layout.ts:6 ~ load ~ locale:', locale);
	await loadLocaleAsync(locale);

	return event.data as App.Locals;
}) satisfies LayoutLoad;
