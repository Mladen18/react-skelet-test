import * as Yup from 'yup';

export const emailValidator = (message?: string) => Yup.string().email(message);
