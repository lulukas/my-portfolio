const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			...colors,
			orange: {
				DEFAULT: '#DD9C3A',
			},
			antrazit: { dark: '#212F3C', DEFAULT: '#19373E', light: '#3B7074' },
		},
		fontFamily: {
			sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
		},
		extend: {},
	},
	plugins: [],
};
