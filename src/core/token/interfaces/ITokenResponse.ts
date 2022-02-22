import { IProfileResponse } from '../../profile/interfaces';

interface ITokenResponse {
    token_key: string;
    refresh_token_key: string;
    expires_at: string;
    refresh_expires_at: string;
    last_active_date: string;
    created_at: string;
    updated_at: string;
    user: IProfileResponse;
}

export default ITokenResponse;
