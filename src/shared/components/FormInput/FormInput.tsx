import { FC } from 'react';
import { TextField, useTheme } from '@mui/material';
import SvgIcon from 'shared/components/SvgIcon/SvgIcon';
import { IFormInput } from 'shared/interfaces';
import { P } from '../P';
import errorIcon from '../../../assets/icons/error.svg';
import styles from './FormInput.module.scss';
import { Label } from '../Label';

const FormInput: FC<IFormInput> = ({
    searchHandler,
    label,
    errorMessage,
    error,
    className,
    helpMessage,
    ...props
}) => {
    const { palette } = useTheme();

    // Serach change handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchHandler(e.target.value);
    };

    return (
        <div className={className}>
            <Label color={error ? palette.error.dark : palette.text.primary}>
                {label}
            </Label>

            <TextField
                className={styles.formInput}
                variant="outlined"
                label=""
                error={error}
                inputProps={props}
                onChange={handleChange}
            />

            {error && errorMessage && (
                <div className={styles.errorContainer}>
                    <SvgIcon
                        spriteUrl={errorIcon}
                        className={styles.errorIcon}
                    />
                    <P variant="small" className={styles.messageError}>
                        {errorMessage}
                    </P>
                </div>
            )}

            {helpMessage && <P variant="small">{helpMessage}</P>}
        </div>
    );
};

export default FormInput;
