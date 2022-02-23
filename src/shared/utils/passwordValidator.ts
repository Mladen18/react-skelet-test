import * as Yup from 'yup';
import { PASSWORD_REGEX } from '../constants/passwordRegex';

export const passwordValidator = (message?: string) =>
    Yup.string().matches(PASSWORD_REGEX, message);
