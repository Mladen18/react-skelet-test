import { IProfile } from '../interfaces';

const createProfile = ({ id, ...props }: Partial<IProfile>) => {
    if (!id) {
        throw new Error('Unable to create profile without an ID!');
    }

    return {
        id,
        email: '',
        firstName: '',
        lastName: '',
        avatar: '',
        roles: [],
        ...props,
    } as IProfile;
};

export default createProfile;
