import { FC, useEffect } from 'react';
import styles from './PostLayout.module.scss';
import logCompName from '../../utils/logMessage';

type PostLayout = {
    message: string;
    children: React.ReactNode;
    className: string;
    compName: string;
};
const CardLayout: FC<PostLayout> = ({
    message,
    children,
    className,
    compName,
}) => {
    const componentName = compName;
    useEffect(() => {
        logCompName(message, componentName);
    }, [message]);

    const classes: string = styles.post + ' ' + className;

    return <div className={classes}>{children}</div>;
};

export default CardLayout;
