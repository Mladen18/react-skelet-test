import { MultiLanguageSupportContext } from 'core/translations/contexts';
import { Form, Formik } from 'formik';
import { EMPTY_REQUEST_PASSWORD_RESET_CREDENTIALS } from 'modules/auth/constants';
import { FC, useContext } from 'react';
import { FormInput } from 'shared/misc/components/FormInput';
import { emailValidator, requiredValidator } from 'shared/yup/utils';
import { object } from 'yup';
import styles from './RequestPasswordResetForm.module.scss';

const RequestPasswordResetForm: FC = () => {
    const { t } = useContext(MultiLanguageSupportContext);
    // TODO: uncomment this to utilize submit logic
    // const { requestResetPassword } = useRequestResetPassword();
    // const history = useHistory();

    const validationSchema = object().shape({
        email: requiredValidator(
            t('required'),
            emailValidator(
                t('field-error-invalid', {
                    field: t('email-label'),
                })
            )
        ),
    });

    return (
        <div className={styles.container}>
            <Formik
                initialValues={EMPTY_REQUEST_PASSWORD_RESET_CREDENTIALS}
                onSubmit={async () =>
                    // TODO: this is a placeholder for your submit implementation
                    // TODO: call appropriate hook & implement submit logic here
                    // resetPassword(hash, credentials)
                    console.log('Submit')
                }
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
                        <p className={styles.title}>
                            {t('forgot-your-password-title')}
                        </p>
                        <p className={styles.text}>
                            {t('forgot-your-password-text')}
                        </p>
                        <FormInput
                            name={'email'}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            textHelper={errors['email']}
                            error={!!errors['email'] && touched['email']}
                            type="text"
                            label={t('email-label')}
                            placeholder={t('field-placeholder', {
                                field: 'email',
                            })}
                        />
                        <button type="submit" disabled={!isValid}>
                            {t('request-reset-password-submit')}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RequestPasswordResetForm;
