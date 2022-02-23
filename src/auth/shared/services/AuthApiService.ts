import { apiService } from 'core/api/services/ApiService';
import { createProfileFromResponse } from 'core/profile/utils';
import { ITokenResponse } from 'core/token/interfaces';
import { ILoginCredentials } from '../interfaces/ILoginCredentials';
import { ILoginResponse } from '../interfaces/ILoginResponse';
import { IForgotPasswordCredentials } from '../interfaces/IForgotPasswordCredentials';
import { IResetPasswordCredentials } from '../interfaces/IResetPasswordCredentials';

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

    async requestPasswordReset(credentials: IForgotPasswordCredentials) {
        const response = await apiService.post<
            any, // TODO: replace any type with appropriate response model
            IForgotPasswordCredentials
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
