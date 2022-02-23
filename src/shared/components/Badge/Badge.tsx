import { Typography } from '@mui/material';
import { FC } from 'react';

interface BadgeProps {
    id?: string;
}

const Badge: FC<BadgeProps> = ({ children }) => {
    return <Typography variant="badge">{children}</Typography>;
};

export default Badge;
