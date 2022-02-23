import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface PProps extends TypographyProps {
    id?: string;
    variant?: 'p' | 'big' | 'small' | 'intro';
}

const P: FC<PProps> = ({ children, variant = 'p', ...otherProps }) => {
    return (
        <Typography
            variantMapping={{
                //* Change rendered elements for custom typographies to p from default span
                p: 'p',
                small: 'p',
                big: 'p',
                intro: 'p',
            }}
            variant={variant}
            {...otherProps}>
            {children}
        </Typography>
    );
};

export default P;
