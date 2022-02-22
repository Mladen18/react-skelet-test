import * as Yup from 'yup';

const requiredValidator = (
    message?: string,
    schema: Yup.AnySchema = Yup.string()
) => schema.required(message);

export default requiredValidator;
