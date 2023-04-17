const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
	mode: 'jit',
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			display: ['var(--unica-one-font)', ...fontFamily.sans],
			body: ['var(--inter-font)', ...fontFamily.serif],
		},
		extend: {
			colors: {
				'bg-color': '#0B0E13',
				'main-color': '#60759F',
				'caret-color': '#60759F',
				'sub-color': '#394760',
				'sub-alt-color': '#141a24',
				'text-color': '#9FADC6',
				'text-color-highlight': '#FFFFFF',
			},
		},
	},
	plugins: [],
}
