import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import styles from './FormInput.module.scss';

export interface IFormInputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    /**
     * Label text of the `input` element.
     */
    label?: string;

    /**
     * Error text attribute of the `input` element.
     */
    textHelper?: string;

    /**
     * Error attribute of the `input` element.
     */
    error?: boolean;
}

const FormInput: FC<IFormInputProps> = ({
    label,
    textHelper,
    error,
    ...props
}) => (
    <div className={styles.container}>
        {label && <label>{label}</label>}
        <input className={error ? `${styles.inputError}` : ''} {...props} />
        {error && textHelper && <p className={styles.error}>{textHelper}</p>}
    </div>
);

export default FormInput;
