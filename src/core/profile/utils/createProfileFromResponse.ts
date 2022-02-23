import { IProfileResponse, IProfile } from '../interfaces';
import createProfile from './createProfile';

const createProfileFromResponse = ({
    id,
    first_name,
    last_name,
    ...props
}: IProfileResponse): IProfile => {
    return createProfile({
        id: id.toString(),
        firstName: first_name ?? '',
        lastName: last_name ?? '',
        ...props,
    });
};

export default createProfileFromResponse;
