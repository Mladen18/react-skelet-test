import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { AuthLayout } from 'auth/shared/components/AuthLayout';
import { useTranslate } from 'core/translations/hooks';
import { H, P } from 'shared/components';
import { Button, Divider, Link, useTheme } from '@mui/material';
import { RoutesEnum } from 'shared/enums/RoutesEnum';
import googleIcon from '../../assets/icons/google.svg';
import styles from './LoginPage.module.scss';

const Login: FC = () => {
    const t = useTranslate();
    const { palette } = useTheme();

    return (
        <AuthLayout>
            <div className={styles.container}>
                <LoginForm />
                <div className={styles.containerMore}>
                    <div className={styles.resetPassword}>
                        <P className={styles.troubleLabel}>
                            {t('trouble-sign-in')}
                        </P>
                        <Link
                            underline="always"
                            component={RouterLink}
                            color={palette.text.primary}
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
                        {t('login-sign-in-google')}
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/registration"
                        className={styles.btn}
                        variant="outlined">
                        {t('create-account')}
                    </Button>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;
