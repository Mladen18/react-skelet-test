import { LocalStorageKeysEnum } from '../enums';

const setItemToLocalStorage = <T>(
    key: LocalStorageKeysEnum,
    value: T
): void => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(
            `Can not get item with key ${key} from local storage - `,
            error
        );
    }
};

export default setItemToLocalStorage;
