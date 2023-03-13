import en from '../en';
import type { Translation } from '../i18n-types';

const de = {
	...en,
	HOME: {
		MY: 'Ich heisse',
		IAM: 'und bin',
		TITLE: 'Web-Frontend Enthusiast',
		DESCRIPTION:
			'Meine berufliche Reise begann als Elektroniker, wobei ich mein Herz ziemlich schnell ans Programmieren verlor.  Beim Mitentwickeln meiner ersten Desktop-Applikation wurde dann schnell klar, dass ich mich mehr mit Frontend auseinandersetzen möchte. Während meinem Informatikstudium, mit Schwerpunkt UX/UI und Projektmanagement, konnte ich mir das nötige Know-how aneignen und dies dann als Fullstack web Entwickler in einem Start-up auch wirklich anwenden. Mittlerweile arbeite ich bei einer Softwareagentur als Web-Frontend Spezialist.',
	},
} satisfies Translation;

export default de;
