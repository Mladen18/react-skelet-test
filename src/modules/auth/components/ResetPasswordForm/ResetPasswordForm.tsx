import { MultiLanguageSupportContext } from 'core/translations/contexts';
import { Form, Formik } from 'formik';
import { EMPTY_RESET_PASSWORD_CREDENTIALS } from 'modules/auth/constants';
import { FC, useContext } from 'react';
import { FormInput } from 'shared/misc/components/FormInput';
import { passwordValidator, requiredValidator } from 'shared/yup/utils';
import { object } from 'yup';
import ResetPasswordFormStyles from './ResetPasswordForm.module.scss';

const ResetPasswordForm: FC = () => {
    const { t } = useContext(MultiLanguageSupportContext);
    // TODO: uncomment this to utilize submit logic
    // const { mutate: resetPassword } = useResetPassword();
    // const { hash } = useParams<{ hash: string }>();

    const validationSchema = object().shape({
        password: requiredValidator(
            t('required'),
            passwordValidator(
                t('field-error-invalid', {
                    field: t('password-label'),
                })
            )
        ),
        confirm_password: requiredValidator(
            t('required'),
            passwordValidator(
                t('field-error-invalid', {
                    field: t('password-label'),
                })
            )
        ),
    });

    return (
        <div className={ResetPasswordFormStyles.resetPasswordFormContainer}>
            <Formik
                initialValues={EMPTY_RESET_PASSWORD_CREDENTIALS}
                onSubmit={async () =>
                    // TODO: this is a placeholder for your submit implementation
                    // TODO: call appropriate hook & implement submit logic here
                    // resetPassword(hash, credentials)
                    console.log('Submit')
                }
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
                    <Form className={ResetPasswordFormStyles.form}>
                        <p className={ResetPasswordFormStyles.title}>
                            {t('reset-password-title')}
                        </p>
                        <p className={ResetPasswordFormStyles.text}>
                            {t('reset-password-text')}
                        </p>
                        <FormInput
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            textHelper={errors.password}
                            error={!!errors.password && touched.password}
                            type="password"
                            label={t('password-label')}
                            placeholder={t('field-placeholder', {
                                field: 'password',
                            })}
                        />
                        <FormInput
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            textHelper={errors.confirm_password}
                            error={
                                !!errors.confirm_password &&
                                touched.confirm_password
                            }
                            type="password"
                            label={t('password-label')}
                            placeholder={t('field-placeholder', {
                                field: 'password',
                            })}
                        />
                        <button type="submit" disabled={!isValid}>
                            {t('reset-password-submit')}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ResetPasswordForm;
