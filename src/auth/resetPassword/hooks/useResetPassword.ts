import { IResetPasswordCredentials } from 'auth/shared/interfaces/IResetPasswordCredentials';
import { authApiService } from 'auth/shared/services/AuthApiService';
import { useTranslate } from 'core/translations/hooks';
import { useMutation, UseMutationResult } from 'react-query';

type MutationArguments = {
    hash: string;
    credentials: IResetPasswordCredentials;
};

export const useResetPassword = (): UseMutationResult<
    unknown,
    unknown,
    MutationArguments,
    unknown
> => {
    const t = useTranslate();

    // Due to https://github.com/tannerlinsley/react-query/discussions/1226 mutation currently are limited to
    // take just one argument
    return useMutation(
        ({ hash, credentials }: MutationArguments) =>
            authApiService.resetPassword(hash, credentials),
        {
            onSuccess: () => {
                // TODO: add your implementation here
            },
            onError: () => {
                // TODO: handle error implementation here
                // eslint-disable-next-line no-console
                console.error(t('request-password-reset-error'));
            },
        }
    );
};
