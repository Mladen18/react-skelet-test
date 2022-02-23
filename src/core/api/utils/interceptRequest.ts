import { AxiosInstance } from 'axios';
import { tokenService } from '../../token/services/TokenService';
import appendToken from './appendToken';

const interceptRequest = (httpClient: AxiosInstance): void => {
    httpClient.interceptors.request.use(
        (config) => {
            const userToken = tokenService.token;

            appendToken(config, userToken);

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};

export default interceptRequest;
