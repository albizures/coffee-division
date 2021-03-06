/* eslint-disable @typescript-eslint/no-var-requires */
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	reactStrictMode: true,
	webpack(config) {
		config.plugins.push(new WindiCSSWebpackPlugin());
		return config;
	},
	i18n: {
		locales: ['en', 'es', 'pseudo'],
		defaultLocale: 'es',
		localeDetection: true,
	},
};
