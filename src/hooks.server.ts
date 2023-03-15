import type { Handle } from '@sveltejs/kit';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { baseLocale, detectLocale } from './lib/i18n/i18n-util';

export const handle = (async ({ event, resolve }) => {
	const langFromCookie = event.cookies.get('lang');

	let locale = baseLocale;

	if (langFromCookie) {
		locale = detectLocale(() => [langFromCookie]);
	} else {
		const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request);
		locale = detectLocale(acceptLanguageHeaderDetector);
	}

	event.locals.locale = locale;

	return resolve(event);
}) satisfies Handle;
