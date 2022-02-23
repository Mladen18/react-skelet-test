import { useContext } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
import { MultiLanguageSupportContext } from 'core/translations/contexts';
import { authApiService } from '../../shared/services/AuthApiService';
import { IForgotPasswordCredentials } from '../../shared/interfaces/IForgotPasswordCredentials';

export const useForgotPassword = (): UseMutationResult<
    unknown,
    unknown,
    IForgotPasswordCredentials,
    unknown
> => {
    const { t } = useContext(MultiLanguageSupportContext);

    return useMutation(authApiService.requestPasswordReset, {
        onSuccess: () => {
            // TODO: add your implementation here
        },
        onError: () => {
            // TODO: handle error implementation here
            // eslint-disable-next-line no-console
            console.error(t('request-password-reset-error'));
        },
    });
};
