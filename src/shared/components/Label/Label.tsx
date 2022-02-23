import { FC, HTMLProps } from 'react';
import { Typography, TypographyProps } from '@mui/material';

type ExtraLabelProps = Omit<TypographyProps, 'component'> &
    HTMLProps<HTMLLabelElement>;
interface LabelProps extends ExtraLabelProps {
    id?: string;
}

const Label: FC<LabelProps> = ({ children, ...otherProps }) => (
    <Typography
        variantMapping={{
            label: 'label',
        }}
        variant="label"
        {...otherProps}>
        {children}
    </Typography>
);

export default Label;
