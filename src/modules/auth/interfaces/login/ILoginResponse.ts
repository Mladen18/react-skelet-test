import { IProfile } from '../../../../core/profile/interfaces';
import { IToken } from '../../../../core/token/interfaces';

interface ILoginResponse extends IToken {
    user: IProfile;
}

export default ILoginResponse;
