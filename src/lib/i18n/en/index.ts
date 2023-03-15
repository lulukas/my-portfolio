import type { BaseTranslation } from '../i18n-types';

const en = {
	CHANGE_LANGUAGE: {
		LOCALE: 'de',
		LANGUAGE: 'Deutsch',
		THIS_WAY: 'hier entlang',
	},
	HOME: {
		MY: 'My name is',
		IAM: "I'm a",
		TITLE: 'Web-frontend Enthusiast',
		DESCRIPTION:
			'My professional journey began as an electronics engineer, but I quickly lost my heart to programming.  While co-developing my first desktop application, it quickly became clear that I wanted to get more involved with the frontend. During my computer science studies, with a focus on UX/UI and project management, I was able to acquire the necessary know-how and then really apply it as a full-stack web developer in a start-up. Meanwhile, I work for a software agency as a web frontend specialist.',
	},
	EXPERIENCE: {
		TITLE: 'What companies have I worked for?',
	},
	EDUCATION: {
		TITLE: 'Which schools did I visit?',
	},
	PROJECTS: {
		TITLE: 'What have I worked on?',
	},
} satisfies BaseTranslation;

export default en;
