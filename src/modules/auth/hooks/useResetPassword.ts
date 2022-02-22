import { useContext } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
import { MultiLanguageSupportContext } from '../../../core/translations/contexts';
import { IResetPasswordCredentials } from '../interfaces/resetPassword';
import { authApiService } from '../services/AuthApiService';

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
    const { t } = useContext(MultiLanguageSupportContext);

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
