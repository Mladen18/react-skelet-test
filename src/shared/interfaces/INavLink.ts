import type { ValidTranslationKeys } from 'react-i18next';
import { RoutesEnum } from 'shared/enums/RoutesEnum';

interface INavLink {
    id: string | number;
    labelKey: keyof ValidTranslationKeys;
    pathname: RoutesEnum;
    icon?: string;
}

export default INavLink;
