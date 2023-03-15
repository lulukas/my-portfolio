import type { Locales } from '$/lib/i18n/i18n-types';
import { detectLocale } from '$lib/i18n/i18n-util';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals, url, cookies }) => {
	const langParam = 'lang';

	const newLocale = url.searchParams.get(langParam);
	if (newLocale) {
		cookies.set(langParam, newLocale, { path: '/' });
		url.searchParams.delete(langParam);
		// Redirect to remove the GET var
		throw redirect(303, url.toString());
	}

	return {
		locale: newLocale ? detectLocale(() => [newLocale]) : locals.locale,
	};
}) satisfies LayoutServerLoad;
