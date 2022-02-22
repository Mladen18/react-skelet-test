import { useContext } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
import { MultiLanguageSupportContext } from '../../../core/translations/contexts';
import { IRequestPasswordResetCredentials } from '../interfaces/resetPassword';
import { authApiService } from '../services/AuthApiService';

const useRequestResetPassword = (): UseMutationResult<
    unknown,
    unknown,
    IRequestPasswordResetCredentials,
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

export default useRequestResetPassword;
