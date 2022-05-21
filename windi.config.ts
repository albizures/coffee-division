import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	extract: {
		include: ['**/*.{jsx,tsx,css}'],
		exclude: ['node_modules', '.git', '.next'],
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
			rutherford: '#8f7252',
			hunt: '#2b4f3f',
			flintstone: '#697484',
			liquorice: '#3b3b3b',
		},
	},
});
