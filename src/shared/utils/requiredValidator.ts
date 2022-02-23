import * as Yup from 'yup';

export const requiredValidator = (
    message?: string,
    schema: Yup.AnySchema = Yup.string()
) => schema.required(message);
