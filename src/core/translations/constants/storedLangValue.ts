import { LocalStorageKeysEnum } from '../../shared/enums';
import { getItemFromLocalStorage } from '../../shared/utils';

const storedLangValue: string | null = getItemFromLocalStorage(
    LocalStorageKeysEnum.appLang
);

export default storedLangValue;
