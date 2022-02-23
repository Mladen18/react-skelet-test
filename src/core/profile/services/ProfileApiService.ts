import { apiService } from '../../api/services/ApiService';
import { IProfile, IProfileResponse } from '../interfaces';
import { createProfileFromResponse } from '../utils';

class ProfileApiService {
    async me(): Promise<IProfile> {
        const data = apiService.responseHandler(
            await apiService.get<IProfileResponse>('/me')
        );
        return createProfileFromResponse(data);
    }
}

export const profileApiService = new ProfileApiService();
