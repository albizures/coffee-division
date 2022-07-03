import { defineConfig } from 'windicss/helpers';
import plugin from 'windicss/plugin';

export default defineConfig({
	extract: {
		include: ['**/*.{jsx,tsx,css}'],
		exclude: ['node_modules', '.git', '.next'],
	},
	shortcuts: {
		'anim-appear': 'transform scale-0 animate-fill-forwards',
	},
	theme: {
		colors: {
			white: 'white',
			black: 'black',
			pumpkin: '#163427',
			garland: '#686F5F',
			lemon: '#FCDC92',
			caraway: '#6c573f',
			komorebi: '#bdc4b3',
			foothills: '#a08b67',
			'extra-white': '#edf0e9',
			crisp: '#E9E3D7',
			rutherford: '#8f7252',
			hunt: '#2b4f3f',
			hunty: '#244335',
			flintstone: '#697484',
			liquorice: '#3b3b3b',
			transparent: 'transparent',
		},
		fontFamily: {
			sans: ['Work Sans', 'sans-serif'],
			serif: ['DM Serif Display', 'serif'],
		},
		extend: {
			animation: {
				'back-in-left': 'backInLeft forwards',
				'back-in-right': 'backInRight forwards',
				'back-in-up': 'backInUp forwards',
				pulse: 'pulse',
				swing: 'swing',
			},
		},
	},
	plugins: [
		require('@windicss/plugin-animations'),
		// plugin(({ addComponents }) => {
		// 	addComponents({
		// 		'animation-delay-75': {
		// 			animationDelay: '75ms',
		// 			color: 'red',
		// 		},
		// 		'animation-delay-100': {
		// 			animationDelay: '100ms',
		// 		},
		// 	});
		// }),
	],
});
