import i18n from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'uk';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
	log: {
		level: dev ? 'warn' : 'error'
	},
	translations: {
		en: { lang },
		cs: { lang },
		uk: { lang },
		ru: { lang }
	},
	loaders: [
		{
			locale: 'en',
			key: 'menu',
			loader: async () => (await import('./en/menu.json')).default
		},
		{
			locale: 'en',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./en/about.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'cs',
			key: 'menu',
			loader: async () => (await import('./cs/menu.json')).default
		},
		{
			locale: 'cs',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./cs/about.json')).default
		},
		{
			locale: 'cs',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./cs/home.json')).default
		},
		{
			locale: 'uk',
			key: 'menu',
			loader: async () => (await import('./ua/menu.json')).default
		},
		{
			locale: 'uk',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./ua/about.json')).default
		},
		{
			locale: 'uk',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./ua/home.json')).default
		},
		{
			locale: 'ru',
			key: 'menu',
			loader: async () => (await import('./ru/menu.json')).default
		},
		{
			locale: 'ru',
			key: 'about',
			routes: ['/about'],
			loader: async () => (await import('./ru/about.json')).default
		},
		{
			locale: 'ru',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./ru/home.json')).default
		}
	]
};

export const {
	t,
	loading,
	locales,
	locale,
	translations,
	loadTranslations,
	addTranslations,
	setLocale,
	setRoute
} = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
