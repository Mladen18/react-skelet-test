import { FC } from 'react';

type SvgIconProps = {
    spriteUrl: string;
    className?: string;
    onClick?: () => void;
};

const SvgIcon: FC<SvgIconProps> = ({ spriteUrl, className, ...props }) => {
    return (
        <svg className={className} {...props}>
            <use href={`${spriteUrl}#icon`} />
        </svg>
    );
};

export default SvgIcon;
