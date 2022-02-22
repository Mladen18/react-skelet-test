import { apiService } from '../../../core/api/services/ApiService';
import { createProfileFromResponse } from '../../../core/profile/utils';
import { ITokenResponse } from '../../../core/token/interfaces';
import { ILoginCredentials, ILoginResponse } from '../interfaces/login';
import {
    IRequestPasswordResetCredentials,
    IResetPasswordCredentials,
} from '../interfaces/resetPassword';

class AuthApiService {
    async login(credentials: ILoginCredentials): Promise<ILoginResponse> {
        const { user, token_key, refresh_token_key } =
            apiService.responseHandler(
                await apiService.post<ITokenResponse, ILoginCredentials>(
                    '/token',
                    {
                        ...credentials,
                    }
                )
            );

        return {
            token: token_key,
            refreshToken: refresh_token_key,
            user: createProfileFromResponse(user),
        };
    }

    async requestPasswordReset(credentials: IRequestPasswordResetCredentials) {
        const response = await apiService.post<
            any, // TODO: replace any type with appropriate response model
            IRequestPasswordResetCredentials
        >('/reset-password', credentials);

        return response;
    }

    async resetPassword(hash: string, credentials: IResetPasswordCredentials) {
        const response = await apiService.put<
            // TODO: replace any type with appropriate response model
            any,
            IResetPasswordCredentials
        >(`/reset-password/${hash}`, credentials);

        return response;
    }
}

export const authApiService = new AuthApiService();
