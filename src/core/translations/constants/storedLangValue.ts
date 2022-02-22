import { LocalStorageKeysEnum } from '../../localStorage/enums';
import { getItemFromLocalStorage } from '../../localStorage/utils';

const storedLangValue: string | null = getItemFromLocalStorage(
    LocalStorageKeysEnum.appLang
);

export default storedLangValue;
