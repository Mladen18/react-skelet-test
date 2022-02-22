import { ResetPasswordForm } from 'modules/auth/components/ResetPasswordForm';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Copyright } from 'shared/misc/components/Copyright';
import { MultiLanguageSupportContext } from '../../../../core/translations/contexts';
import { RoutesEnum } from '../../../navigation/enums';
import { AuthPageLayout } from '../../components/AuthPageLayout';

const ResetPasswordPage: FC = () => {
    const { t } = useContext(MultiLanguageSupportContext);

    return (
        <AuthPageLayout>
            <ResetPasswordForm />
            <Link to={RoutesEnum.LOGIN}>{t('return-to-login')}</Link>
            <Copyright companyName="Q Agency" />
        </AuthPageLayout>
    );
};

export default ResetPasswordPage;
