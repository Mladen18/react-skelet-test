import { createContext } from 'react';
import { ValidTranslationKeys } from 'react-i18next';
import { DEFAULT_LANGUAGE, STORED_LANGUAGE } from '../constants';

export type TranslateFunction = (
    key: keyof ValidTranslationKeys,
    ...args: any
) => string;

interface MultiLanguageSupportProps {
    language: string;
    setLanguage: (lang: string) => void;
    t: TranslateFunction;
}

const MultiLanguageSupportContext = createContext<MultiLanguageSupportProps>({
    language: STORED_LANGUAGE ?? DEFAULT_LANGUAGE,
    setLanguage: () => {
        console.log('No provider available. ');
    },
    t: () => '',
});

export default MultiLanguageSupportContext;
