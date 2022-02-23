import { useContext } from 'react';
import MultiLanguageSupportContext, {
    TranslateFunction,
} from '../contexts/MultiLanguageSupportContext';

export const useTranslate = (): TranslateFunction => {
    const { t } = useContext(MultiLanguageSupportContext);

    return t;
};
