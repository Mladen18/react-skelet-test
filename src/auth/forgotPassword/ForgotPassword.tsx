import { FC } from 'react';
import { ForgotPasswordForm } from 'auth/forgotPassword/components/ForgotPasswordForm';
import { AuthLayout } from '../shared/components/AuthLayout';

const ForgotPassword: FC = () => {
    return (
        <AuthLayout>
            <ForgotPasswordForm />
        </AuthLayout>
    );
};

export default ForgotPassword;
