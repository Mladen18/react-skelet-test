import 'react-i18next';
declare module 'react-i18next' {
    export type ValidTranslationKeys =
        typeof import('../public/locales/en/translation.json');
}
