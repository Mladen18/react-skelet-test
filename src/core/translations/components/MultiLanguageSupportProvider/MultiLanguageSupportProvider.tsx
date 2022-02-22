import { FC, useEffect, useState } from 'react';
import { useTranslation, ValidTranslationKeys } from 'react-i18next';
import { LocalStorageKeysEnum } from '../../../localStorage/enums';
import { setItemToLocalStorage } from '../../../localStorage/utils';
import { DEFAULT_LANGUAGE, STORED_LANGUAGE } from '../../constants';
import { MultiLanguageSupportContext } from '../../contexts';

const MultiLanguageSupportProvider: FC = ({ children }) => {
    const [language, setLanguage] = useState(
        STORED_LANGUAGE || DEFAULT_LANGUAGE
    );

    const { t, i18n } = useTranslation();

    useEffect(() => {
        setLanguage(language);
        i18n.changeLanguage(language);
        setItemToLocalStorage(LocalStorageKeysEnum.appLang, language);
    }, [language]);

    return (
        <MultiLanguageSupportContext.Provider
            value={{
                language,
                setLanguage,
                t: (key: keyof ValidTranslationKeys, ...args: any) =>
                    t(key, ...args),
            }}>
            {children}
        </MultiLanguageSupportContext.Provider>
    );
};

export default MultiLanguageSupportProvider;
