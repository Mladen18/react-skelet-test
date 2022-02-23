import { FC } from 'react';
import { useTranslate } from 'core/translations/hooks';
import { Button } from '@mui/material';
import { P } from 'shared/components';
import { Form, Formik } from 'formik';
import { object } from 'yup';
import { requiredValidator } from 'shared/utils/requiredValidator';
import { passwordValidator } from 'shared/utils/passwordValidator';
import { EMPTY_RESET_PASSWORD_CREDENTIALS } from 'auth/resetPassword/constants/emptyResetPasswordCredentials';
import { FormInputPassword } from 'shared/components/FormInputPassword';
import styles from './ResetPasswordForm.module.scss';

const ResetPasswordForm: FC = () => {
    const t = useTranslate();
    // TODO: uncomment this to utilize submit logic
    // const { mutate: resetPassword } = useResetPassword();
    // const { hash } = useParams<{ hash: string }>();

    const validationSchema = object().shape({
        password: requiredValidator(
            t('set-new-password-input-empty'),
            passwordValidator(t('set-new-password-input-invalid'))
        ),
    });

    const handleSubmit = () => {
        // TODO: this is a placeholder for your submit implementation
        // TODO: call appropriate hook & implement submit logic here
        // resetPassword(hash, credentials)
        console.log('ResetPasswordForm - form submitted!');
    };

    return (
        <div className={styles.container}>
            <Formik
                initialValues={EMPTY_RESET_PASSWORD_CREDENTIALS}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                validateOnBlur={true}
                enableReinitialize={true}>
                {({
                    isValid,
                    handleChange,
                    handleBlur,
                    errors,
                    touched,
                    values,
                }) => (
                    <Form className={styles.form}>
                        <FormInputPassword
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorMessage={errors.password}
                            error={!!errors.password && touched.password}
                            label={t('set-new-password-input-label')}
                        />
                        <P variant="small" className={styles.message}>
                            {t('set-new-password-input-message')}
                        </P>
                        <Button
                            fullWidth
                            className={styles.button}
                            color="primary"
                            variant="contained"
                            type="submit"
                            disabled={!isValid}>
                            {t('set-new-password-button')}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ResetPasswordForm;
