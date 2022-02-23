import { FC } from 'react';
import {
    Link as MuiLink,
    LinkProps as MuiLinkProps,
    useTheme,
} from '@mui/material';
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
} from 'react-router-dom';

type ExtraLinkProps = MuiLinkProps & RouterLinkProps;

interface LabelProps extends ExtraLinkProps {
    id?: string;
}

const Link: FC<LabelProps> = ({
    children,
    color,
    variant,
    underline,
    ...otherProps
}) => {
    const { palette } = useTheme();

    return (
        <MuiLink
            variant={variant || 'link'}
            underline={underline || 'none'}
            color={color || palette.text.primary}
            component={RouterLink}
            {...otherProps}>
            {children}
        </MuiLink>
    );
};

export default Link;
