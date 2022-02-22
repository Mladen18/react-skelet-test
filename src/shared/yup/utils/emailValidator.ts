import * as Yup from 'yup';

const emailValidator = (message?: string) => Yup.string().email(message);

export default emailValidator;
