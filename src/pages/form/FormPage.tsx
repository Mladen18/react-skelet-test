import { FC, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Form, Formik, FormikHelpers } from 'formik';
import logCompName from '../../shared/utils/logMessage';
import { GlobalLayout, H } from 'shared/components';
import { apiService } from '../../core/api/services/ApiService';
import { Button } from '@mui/material';
import { object } from 'yup';
import styles from './Form.module.scss';
import { requiredValidator } from 'shared/utils/requiredValidator';
import { FormInput } from 'shared/components/FormInput';
import { useTranslate } from 'core/translations/hooks';

interface PageForm {
    message: string;
    compName: string;
}

interface FormData {
    id?: number;
    title: string;
    body: string;
    userId: number;
}

const FormPage: FC<PageForm> = ({ message, compName }) => {
    const t = useTranslate();

    const [msg, setMessage] = useState('');
    // const [post, setPost] = useState<FormData>({});

    // Log Message props
    const componentName = compName;
    useEffect(() => {
        logCompName(message, componentName);
    }, [message]);

    // Create post
    const createPost = async (values: {
        title: string;
        body: string;
        userId: number;
    }) => {
        setMessage('Saving...');
        const response = await apiService.post('/posts', values);
        // setPost(response);
        console.log(response.data);
        setMessage('Saved!');

        setTimeout(() => {
            setMessage('');
        }, 2000);
    };

    // Form Validation
    const validationSchema = object().shape({
        title: requiredValidator('Required'),
        body: requiredValidator('Required'),
    });

    // Mutate create post
    const mutation = useMutation(createPost, {
        retry: 3,
    });

    // Submit
    const handleSubmit = (
        values: FormData,
        { resetForm }: FormikHelpers<FormData>
    ) => {
        try {
            mutation.mutate(values);
            resetForm();
            console.log(values, 'Submited!'); // data
        } catch (error) {
            console.error(error); // error
        }
    };

    return (
        <GlobalLayout message={message} compName={'Global Layout'}>
            <Formik
                initialValues={{ title: '', body: '', userId: 1 }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnBlur={true}
                enableReinitialize={true}>
                {({
                    handleChange,
                    handleBlur,
                    isValid,
                    values,
                    errors,
                    touched,
                }) => (
                    <Form className={styles.container}>
                        <div className={styles.column}>
                            <FormInput
                                name={'title'}
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errorMessage={errors.title}
                                error={!!errors.title && touched.title}
                                type="title"
                                placeholder="Enter Title"
                                label={t('title-label')}
                            />
                        </div>
                        <div className={styles.column}>
                            <FormInput
                                name={'body'}
                                value={values.body}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errorMessage={errors.body}
                                error={!!errors.body && touched.body}
                                type="body"
                                placeholder="Enter Body Text"
                                label={t('body-label')}
                            />
                        </div>
                        <Button
                            fullWidth
                            color="primary"
                            variant="contained"
                            type="submit"
                            disabled={!isValid}>
                            {msg !== '' ? msg : 'Submit'}
                        </Button>
                    </Form>
                )}
            </Formik>
            {/* {post} */}
        </GlobalLayout>
    );
};

export default FormPage;
