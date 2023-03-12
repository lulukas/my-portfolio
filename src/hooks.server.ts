import type { Handle } from '@sveltejs/kit';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { detectLocale } from './lib/i18n/i18n-util';

export const handle = (async ({ event, resolve }) => {
	// TODO: get lang from cookie / user setting
	const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request);
	console.log(
		'🚀 ~ file: hooks.server.ts:8 ~ handleDetectLocales ~ acceptLanguageHeaderDetector:',
		acceptLanguageHeaderDetector
	);
	const locale = detectLocale(acceptLanguageHeaderDetector);
	console.log('🚀 ~ file: hooks.server.ts:10 ~ handleDetectLocales ~ locale:', locale);
	event.locals.locale = locale;

	return resolve(event);
}) satisfies Handle;
