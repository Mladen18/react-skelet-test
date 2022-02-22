import { RequestResetPasswordForm } from 'modules/auth/components/RequestPasswordResetForm';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Copyright } from 'shared/misc/components/Copyright';
import { MultiLanguageSupportContext } from '../../../../core/translations/contexts';
import { RoutesEnum } from '../../../navigation/enums';
import { AuthPageLayout } from '../../components/AuthPageLayout';

const RequestPasswordResetPage: FC = () => {
    const { t } = useContext(MultiLanguageSupportContext);

    return (
        <AuthPageLayout>
            <RequestResetPasswordForm />
            <Link to={RoutesEnum.LOGIN}>{t('return-to-login')}</Link>
            <Copyright companyName="Q Agency" />
        </AuthPageLayout>
    );
};

export default RequestPasswordResetPage;
