import { useEffect, FC } from 'react';
import logCompName from '../../utils/logMessage';
import { Label } from '../Label';
import { TextField, useTheme } from '@mui/material';
import { IFormInput } from 'shared/interfaces';
import style from './Search.module.scss';

const Search: FC<IFormInput> = ({
    id,
    searchHandler,
    className,
    message,
    error,
    label,
    placeholder,
    compName,
    ...props
}) => {
    const { palette } = useTheme();

    // Log message
    const componentName = compName;
    useEffect(() => {
        if (componentName) {
            logCompName(message, componentName);
        }
    }, [message]);

    // Serach change handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchHandler(e.target.value);
    };

    return (
        <div className={className + ' ' + style.search}>
            <Label color={error ? palette.error.dark : palette.text.primary}>
                {label}
            </Label>

            <TextField
                id={id}
                label=""
                error={error}
                inputProps={props}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Search;
