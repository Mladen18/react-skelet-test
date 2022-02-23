import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { LocalStorageKeysEnum } from '../../shared/enums';
import { getItemFromLocalStorage } from '../../shared/utils';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants';
import { AvailableLanguageKeysEnum } from '../enums';

const lng: AvailableLanguageKeysEnum =
    getItemFromLocalStorage(LocalStorageKeysEnum.appLang) || DEFAULT_LANGUAGE;

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
    .use(Backend)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        lng,
        fallbackLng: DEFAULT_LANGUAGE,
        supportedLngs: SUPPORTED_LANGUAGES,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
