import { IEntity } from 'shared/interfaces/IEntity';
import { ProfileRolesEnum } from '../enums';

interface IProfile extends IEntity {
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
    roles: Array<ProfileRolesEnum>;
    active: boolean;
}

export default IProfile;
