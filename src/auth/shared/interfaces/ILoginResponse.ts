import { IProfile } from 'core/profile/interfaces';
import { IToken } from 'core/token/interfaces';

export interface ILoginResponse extends IToken {
    user: IProfile;
}
