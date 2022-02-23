import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface HProps extends Omit<TypographyProps, 'variant'> {
    id?: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const H: FC<HProps> = ({ children, variant, ...otherProps }) => {
    return (
        <Typography variant={variant} {...otherProps}>
            {children}
        </Typography>
    );
};

export default H;
