import { FC } from 'react';
import { RoutesEnum } from 'shared/enums/RoutesEnum';
import { useTranslate } from 'core/translations/hooks';
import { Form, Formik } from 'formik';
import { object } from 'yup';
import { emailValidator } from 'shared/utils/emailValidator';
import { requiredValidator } from 'shared/utils/requiredValidator';
import { passwordValidator } from 'shared/utils/passwordValidator';
import IRegistrationCredentials from 'auth/shared/interfaces/IRegistrationCredentials';
import EMPTY_REGISTRATION_CREDENTIALS from 'auth/registration/constants/emptyRegistrationCredentials';
import { Checkbox, FormControlLabel, Button } from '@mui/material';
import { FormInput } from 'shared/components/FormInput';
import { FormInputPassword } from 'shared/components/FormInputPassword';
import { P } from 'shared/components';
import { Link } from 'shared/components/Link';
import styles from './RegistrationForm.module.scss';

const RegistrationForm: FC = () => {
    const t = useTranslate();

    const validationSchema = object().shape({
        name: requiredValidator(
            t('field-error-required', {
                field: t('name'),
            })
        ),
        email: requiredValidator(
            t('field-error-required', { field: t('email') }),
            emailValidator(t('email-error-invalid'))
        ),
        password: requiredValidator(
            t('field-error-required', { field: t('password') }),
            passwordValidator(t('password-error-invalid'))
        ),
    });

    const register = (data: IRegistrationCredentials) => {
        console.log(data);
    };

    return (
        <div className={styles.container}>
            <Formik
                initialValues={EMPTY_REGISTRATION_CREDENTIALS}
                onSubmit={(data) => register(data)}
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
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorMessage={errors.name}
                            error={!!errors.name && touched.name}
                            type="text"
                            label={t('name-label')}
                            className={styles.formInput}
                        />
                        <FormInput
                            name="email"
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            errorMessage={errors.email}
                            error={!!errors.email && touched.email}
                            type="email"
                            label={t('email-label')}
                            className={styles.formInput}
                        />
                        <FormInputPassword
                            name="password"
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            errorMessage={errors.password}
                            error={!!errors.password && touched.password}
                            label={t('password-label')}
                            helpMessage={t('password-hint-text')}
                            className={styles.formInput}
                        />

                        <P className={styles.privacyText}>
                            {t('privacy-policy-text')}
                            <Link to={RoutesEnum.NOT_FOUND} underline="always">
                                {t('privacy-policy-label')}
                            </Link>
                            {t('privacy-policy-end-text')}
                        </P>

                        <FormControlLabel
                            name="newsletter"
                            value={values.newsletter}
                            onChange={handleChange}
                            control={<Checkbox color="tertiary" />}
                            label={
                                <P variant="p">
                                    {t('newsletter-checkbox-label')}
                                </P>
                            }
                            disableTypography
                        />

                        <Button
                            className={styles.formButton}
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={!isValid}>
                            {t('create-account-label')}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegistrationForm;
