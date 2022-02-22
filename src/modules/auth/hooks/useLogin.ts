import { tokenService } from 'core/token/services/TokenService';
import { ILocationState } from 'modules/navigation/interfaces';
import { useContext } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
import { useHistory, useLocation } from 'react-router-dom';
import { MultiLanguageSupportContext } from '../../../core/translations/contexts';
import { RoutesEnum } from '../../navigation/enums';
import { ILoginCredentials, ILoginResponse } from '../interfaces/login';
import { authApiService } from '../services/AuthApiService';

const useLogin = (): UseMutationResult<
    ILoginResponse,
    unknown,
    ILoginCredentials,
    unknown
> => {
    const { t } = useContext(MultiLanguageSupportContext);
    const { push } = useHistory();
    const { state } = useLocation<ILocationState>();

    return useMutation(authApiService.login, {
        onSuccess: (data) => {
            tokenService.token = data.token;
            tokenService.refreshToken = data.refreshToken;
            push({ pathname: state?.from?.pathname ?? RoutesEnum.HOME });
        },
        onError: () => {
            // TODO: handle error implementation here
            // eslint-disable-next-line no-console
            console.error(t('login-error'));
        },
    });
};

export default useLogin;
