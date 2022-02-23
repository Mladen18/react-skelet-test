import { FC } from 'react';
import { useTranslate } from 'core/translations/hooks';
import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { object } from 'yup';
import { requiredValidator } from 'shared/utils/requiredValidator';
import { emailValidator } from 'shared/utils/emailValidator';
import { EMPTY_FORGOT_PASSWORD_CREDENTIALS } from 'auth/forgotPassword/constants/emptyForgotPasswordCredentials';
import { FormInput } from 'shared/components/FormInput';
import styles from './ForgotPasswordForm.module.scss';

const ForgotPasswordForm: FC = () => {
    const t = useTranslate();

    // TODO: uncomment this to utilize submit logic
    // const { requestResetPassword } = useRequestResetPassword();
    // const history = useHistory();

    const validationSchema = object().shape({
        email: requiredValidator(
            t('field-error-required', {
                field: t('email'),
            }),
            emailValidator(t('email-error-invalid'))
        ),
    });

    const handleSubmit = () => {
        // TODO: this is a placeholder for your submit implementation
        // TODO: call appropriate hook & implement submit logic here
        // resetPassword(hash, credentials)
        console.log('ForgotPasswordForm - form submitted!');
    };

    return (
        <div className={styles.container}>
            <Formik
                initialValues={EMPTY_FORGOT_PASSWORD_CREDENTIALS}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                validateOnBlur={false}
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
                        <FormInput
                            name={'email'}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorMessage={errors.email}
                            error={!!errors.email && touched.email}
                            type="email"
                            label={t('email-label')}
                        />
                        <Button
                            fullWidth
                            className={styles.button}
                            color="primary"
                            variant="contained"
                            type="submit"
                            disabled={!isValid}>
                            {t('request-reset-password-button')}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ForgotPasswordForm;
