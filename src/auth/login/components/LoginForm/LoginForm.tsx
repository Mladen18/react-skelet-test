import { FC } from 'react';
import { useTranslate } from 'core/translations/hooks';
import { Form, Formik } from 'formik';
import { object } from 'yup';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { useLogin } from 'auth/login/hooks/useLogin';
import { requiredValidator } from 'shared/utils/requiredValidator';
import { emailValidator } from 'shared/utils/emailValidator';
import { passwordValidator } from 'shared/utils/passwordValidator';
import { FormInput } from 'shared/components/FormInput';
import { FormInputPassword } from 'shared/components/FormInputPassword';
import { EMPTY_LOGIN_CREDENTIALS } from 'auth/login/constants/emptyLoginCredentials';
import styles from './LoginForm.module.scss';

const LoginForm: FC = () => {
    const t = useTranslate();
    const { mutate: login } = useLogin();
    const validationSchema = object().shape({
        email: requiredValidator(
            t('required-email'),
            emailValidator(t('login-email-error-invalid'))
        ),
        password: requiredValidator(
            t('required-password'),
            passwordValidator(t('login-password-error-invalid'))
        ),
    });

    return (
        <div className={styles.container}>
            <Formik
                initialValues={EMPTY_LOGIN_CREDENTIALS}
                onSubmit={(data) => login(data)}
                validationSchema={validationSchema}
                validateOnBlur={false}
                enableReinitialize={true}>
                {({
                    handleBlur,
                    handleChange,
                    errors,
                    touched,
                    values,
                    isValid,
                }) => (
                    <Form className={styles.form}>
                        <FormInput
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label={t('email-label')}
                            errorMessage={errors.email}
                            error={!!errors.email && touched.email}
                            type="email"
                            className={styles.formInput}
                        />
                        <FormInputPassword
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label={t('password-label')}
                            errorMessage={errors.password}
                            error={!!errors.password && touched.password}
                            className={styles.formInput}
                        />
                        <FormControlLabel
                            control={<Checkbox color="tertiary" />}
                            label={t('stay-signed-in')}
                            className={styles.labelSigned}
                        />

                        <Button
                            className={styles.formButton}
                            variant="contained"
                            color="primary"
                            disabled={!isValid}
                            type="submit">
                            {t('login-sign-in')}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
