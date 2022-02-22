import { FC } from 'react';
import { useTranslate } from 'core/translations/hooks';
import { LoginForm } from 'modules/auth/components/LoginForm';
import { Link } from 'react-router-dom';
import { Copyright } from '../../../../shared/misc/components/Copyright';
import { RoutesEnum } from '../../../navigation/enums';
import { AuthPageLayout } from '../../components/AuthPageLayout';

const LoginPage: FC = () => {
    const t = useTranslate();

    return (
        <AuthPageLayout>
            <LoginForm />
            <Link to={RoutesEnum.REQUEST_PASSWORD_RESET}>
                {t('forgot-your-password-link')}
            </Link>
            <Copyright companyName="Q Agency" />
        </AuthPageLayout>
    );
};

export default LoginPage;
