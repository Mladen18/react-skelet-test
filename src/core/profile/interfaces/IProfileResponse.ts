import { IEntity } from 'shared/interfaces/IEntity';
import { ProfileRolesEnum } from '../enums';

interface IProfileResponse extends IEntity<number> {
    email: string;
    first_name: string;
    last_name: string;
    active: boolean;
    avatar: string;
    roles: Array<ProfileRolesEnum>;
}

export default IProfileResponse;
