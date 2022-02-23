import axios, { AxiosInstance } from 'axios';
import { RoutesEnum } from 'shared/enums/RoutesEnum';
import { clearLocalStorage } from '../../shared/utils';
import { tokenApiService } from '../../token/services/TokenApiService';
import { tokenService } from '../../token/services/TokenService';
import appendToken from './appendToken';

const interceptResponse = (httpClient: AxiosInstance): void => {
    httpClient.interceptors.response.use(
        (response) => response,
        (error) => {
            if (!error.response) {
                if (error.message === 'Network Error') {
                    console.error('Network error - server is probably down');
                    throw error;
                } else {
                    console.error('Unkown error', error);
                    throw error;
                }
            } else {
                const userRefreshToken = tokenService.refreshToken;

                switch (error.response.status) {
                    case 401: // Unauthorized
                        if (!userRefreshToken) {
                            clearLocalStorage();
                            window.location.href = RoutesEnum.LOGIN;
                        } else {
                            return tokenApiService
                                .refreshToken(userRefreshToken)
                                .then(({ token, refreshToken }) => {
                                    tokenService.token = token;
                                    tokenService.refreshToken = refreshToken;

                                    return token;
                                })
                                .then((token: string | null) => {
                                    appendToken(error.config, token);

                                    return axios.request(error.config);
                                })
                                .catch(() => {
                                    clearLocalStorage();
                                    window.location.href = RoutesEnum.LOGIN;
                                });
                        }
                        break;
                }
            }
            return error.response;
        }
    );
};
export default interceptResponse;
