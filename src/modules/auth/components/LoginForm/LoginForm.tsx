import { MultiLanguageSupportContext } from 'core/translations/contexts';
import { Form, Formik } from 'formik';
import { EMPTY_LOGIN_CREDENTIALS } from 'modules/auth/constants';
import { useLogin } from 'modules/auth/hooks';
import { FC, useContext } from 'react';
import { FormInput } from 'shared/misc/components/FormInput';
import { emailValidator, requiredValidator } from 'shared/yup/utils';
import { object } from 'yup';
import styles from './LoginForm.module.scss';

const LoginForm: FC = () => {
    const { t } = useContext(MultiLanguageSupportContext);
    const { mutate: login } = useLogin();
    const validationSchema = object().shape({
        email: requiredValidator(
            t('required'),
            emailValidator(
                t('field-error-invalid', {
                    field: t('email-label'),
                })
            )
        ),
        password: requiredValidator(t('required')),
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
                    isValid,
                    handleBlur,
                    handleChange,
                    errors,
                    touched,
                    values,
                }) => (
                    <Form className={styles.form}>
                        <FormInput
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            textHelper={errors.email}
                            error={!!errors.email && touched.email}
                            type="text"
                            label={t('email-label')}
                            placeholder={t('field-placeholder', {
                                field: 'email',
                            })}
                        />
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
                        <button type="submit" disabled={!isValid}>
                            {t('login-submit')}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
