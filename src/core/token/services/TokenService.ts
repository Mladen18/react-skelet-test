import { LocalStorageKeysEnum } from '../../localStorage/enums';
import {
    getItemFromLocalStorage,
    setItemToLocalStorage,
} from '../../localStorage/utils';

class TokenService {
    get token(): string | null {
        return getItemFromLocalStorage(LocalStorageKeysEnum.token);
    }

    set token(value: string | null) {
        setItemToLocalStorage(LocalStorageKeysEnum.token, value);
    }

    get refreshToken(): string | null {
        return getItemFromLocalStorage(LocalStorageKeysEnum.token);
    }

    set refreshToken(value: string | null) {
        setItemToLocalStorage(LocalStorageKeysEnum.refreshToken, value);
    }

    clear() {
        this.token = null;
        this.refreshToken = null;
    }
}

export const tokenService = new TokenService();
