import { ResetPasswordForm } from 'auth/resetPassword/components/ResetPasswordForm';
import { FC } from 'react';
import { RoutesEnum } from 'shared/enums/RoutesEnum';
import { AuthLayout } from '../shared/components/AuthLayout';
import { Link } from 'shared/components/Link';
import { useTranslate } from 'core/translations/hooks';

const ResetPassword: FC = () => {
    const t = useTranslate();

    return (
        <AuthLayout>
            <ResetPasswordForm />
            <Link to={RoutesEnum.LOGIN}>{t('return-to-login')}</Link>
        </AuthLayout>
    );
};

export default ResetPassword;
