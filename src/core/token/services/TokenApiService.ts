import { apiService } from '../../api/services/ApiService';
import { IProfile } from '../../profile/interfaces';
import { createProfileFromResponse } from '../../profile/utils';
import { IToken, ITokenResponse } from '../interfaces';

class TokenApiService {
    async refreshToken(
        refreshToken: string
    ): Promise<IToken & { user: IProfile }> {
        const { user, token_key, refresh_token_key } =
            apiService.responseHandler(
                await apiService.post<ITokenResponse, any>(
                    `/token/refresh/${refreshToken}`,
                    {}
                )
            );

        return {
            token: token_key,
            refreshToken: refresh_token_key,
            user: createProfileFromResponse(user),
        };
    }
}

export const tokenApiService = new TokenApiService();
