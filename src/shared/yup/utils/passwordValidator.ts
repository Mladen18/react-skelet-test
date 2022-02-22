import * as Yup from 'yup';
import { PASSWORD_REGEX } from '../constants';

const passwordValidator = (message?: string) =>
    Yup.string().matches(PASSWORD_REGEX, message);

export default passwordValidator;
