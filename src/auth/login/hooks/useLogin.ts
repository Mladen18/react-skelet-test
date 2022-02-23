import { ILoginCredentials } from 'auth/shared/interfaces/ILoginCredentials';
import { ILoginResponse } from 'auth/shared/interfaces/ILoginResponse';
import { authApiService } from 'auth/shared/services/AuthApiService';
import { tokenService } from 'core/token/services/TokenService';
import { useTranslate } from 'core/translations/hooks';
import { useMutation, UseMutationResult } from 'react-query';
import { useHistory, useLocation } from 'react-router-dom';
import { RoutesEnum } from 'shared/enums/RoutesEnum';
import { ILocationState } from 'shared/interfaces/ILocationState';

export const useLogin = (): UseMutationResult<
    ILoginResponse,
    unknown,
    ILoginCredentials,
    unknown
> => {
    const t = useTranslate();

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
