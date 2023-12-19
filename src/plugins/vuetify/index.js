// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

// i18n
import { en, fr } from 'vuetify/locale';
import translationEn from '@/locale/en';
import translationFr from '@/locale/fr';
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';
import { createI18n, useI18n } from 'vue-i18n';

const availableLocales = [
    {
        name: 'Français',
        value: 'fr',
    },
    {
        name: 'English',
        value: 'en',
        default: true
    }
];

/**
 * Check if given locale is supported for translation
 *
 * @param {String} locale
 *
 * @returns Boolean
 */
function isLocaleSupported (locale) {
    return availableLocales.map(item => item.value).includes(locale);
}

/**
 * Get the default translation locale.
 *
 * @returns {String}
 */
function getDefaultLocale () {
    return availableLocales.find(item => item.default === true).value;
}

const i18n = new createI18n({
    legacy: false, // Vuetify does not support the legacy mode of vue-i18n
    locale: getDefaultLocale(),
    fallbackLocale: getDefaultLocale(),
    messages: {
        en: {
            $vuetify: en.$vuetify,
            ...translationEn
        },
        fr: {
            $vuetify: fr.$vuetify,
            ...translationFr
        }
    },
});

const vuetify = createVuetify({
    components,
    directives,
    locale: {
        locale: getDefaultLocale(),
        adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: {
                colors: {
                    background: '#121212',
                    error: '#CF6679',
                    info: '#2196F3',
                    'on-surface-variant': '#424242',
                    primary: '#BB86FC',
                    'primary-darken-1': '#3700B3',
                    secondary: '#03DAC5',
                    'secondary-darken-1': '#03DAC5',
                    success: '#4CAF50',
                    surface: '#212121',
                    'surface-bright': '#ccbfd6',
                    'surface-variant': '#a3a3a3',
                    warning: '#FB8C00',
                }
            },
            light: {
                colors: {
                    background: '#EEEEEE',
                    error: '#B00020',
                    info: '#2196F3',
                    'on-surface-variant': '#EEEEEE',
                    primary: '#6200EE',
                    'primary-darken-1': '#3700B3',
                    secondary: '#03DAC6',
                    'secondary-darken-1': '#018786',
                    success: '#4CAF50',
                    surface: '#FFFFFF',
                    'surface-bright': '#FFFFFF',
                    'surface-variant': '#424242',
                    warning: '#FB8C00'
                }
            },
        }
    }
});

export {
    i18n,
    vuetify,
    isLocaleSupported,
    getDefaultLocale,
    availableLocales
};
