import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslate } from 'core/translations/hooks';
import { AuthLayout } from 'auth/shared/components/AuthLayout';
import { RegistrationForm } from 'auth/registration/components/RegistrationForm';
import { H, P } from 'shared/components';
import { Button, Divider } from '@mui/material';
import { RoutesEnum } from 'shared/enums/RoutesEnum';
import googleIcon from '../../assets/icons/google.svg';
import { Link } from 'shared/components/Link';
import styles from './Registration.module.scss';

const Registration: FC = () => {
    const t = useTranslate();

    return (
        <AuthLayout>
            <RegistrationForm />

            <div className={styles.containerMore}>
                <div className={styles.resetPassword}>
                    <P className={styles.troubleLabel}>
                        {t('trouble-sign-in')}
                    </P>
                    <Link
                        underline="always"
                        to={RoutesEnum.REQUEST_PASSWORD_RESET}>
                        {t('reset-password-title')}
                    </Link>
                </div>

                <Divider className={styles.divider}>
                    <H variant="h6" className={styles.labelOr}>
                        {t('divider-or')}
                    </H>
                </Divider>

                <Button
                    className={styles.btn}
                    variant="outlined"
                    startIcon={
                        <img
                            src={googleIcon}
                            className={styles.googleLogo}
                            alt="Google icon"
                        />
                    }>
                    {t('register-with-google')}
                </Button>
                <Button
                    component={RouterLink}
                    to="/login"
                    className={styles.btn}
                    variant="outlined">
                    {t('sign-in')}
                </Button>
            </div>
        </AuthLayout>
    );
};

export default Registration;
