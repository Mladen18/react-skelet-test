import { FC, useState } from 'react';
import {
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    useTheme,
} from '@mui/material';
import { P } from '../P';
import SvgIcon from 'shared/components/SvgIcon/SvgIcon';
import eyeCrossed from '../../../assets/icons/eyeCrossed.svg';
import eye from '../../../assets/icons/eye.svg';
import IFormInput from 'shared/interfaces/IFormInput';
import errorIcon from '../../../assets/icons/error.svg';
import styles from './FormInputPassword.module.scss';

const PasswordFormInput: FC<IFormInput> = ({
    label,
    error,
    errorMessage,
    name,
    helpMessage,
    className,
    ...otherProps
}) => {
    const { palette } = useTheme();
    const [nameValue, setNameValue] = useState({
        [name]: false,
    });

    const handleShowClick = () => {
        setNameValue((prevState) => ({
            [name]: !prevState[name],
        }));
    };

    return (
        <div className={className}>
            <Typography
                variant="label"
                color={error ? palette.error.dark : palette.text.primary}>
                {label}
            </Typography>

            <TextField
                className={styles.formInput}
                label=""
                name={name}
                error={error}
                type={nameValue[name] ? 'text' : 'password'}
                inputProps={otherProps}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowClick}>
                                {nameValue[name] ? (
                                    <SvgIcon
                                        className={styles.eyeIcon}
                                        spriteUrl={eyeCrossed}
                                    />
                                ) : (
                                    <SvgIcon
                                        className={styles.eyeIcon}
                                        spriteUrl={eye}
                                    />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
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

            {helpMessage && (
                <P className={styles.helpMessage} variant="small">
                    {helpMessage}
                </P>
            )}
        </div>
    );
};

export default PasswordFormInput;
