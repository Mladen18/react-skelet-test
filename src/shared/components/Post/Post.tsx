import { FC, useEffect } from 'react';
import styles from './Post.module.scss';
import logCompName from '../../utils/logMessage';
import { H, P } from '../index';

type PostBlock = {
    message: string;
    title?: string;
    body?: string;
    compName?: string;
    className?: string;
};

const CardPost: FC<PostBlock> = ({
    message,
    title,
    body,
    compName,
    className,
}) => {
    const componentName = compName;

    useEffect(() => {
        if (componentName) {
            logCompName(message, componentName);
        }
    }, [message]);

    return (
        <div className={styles.post + ' ' + className}>
            <H variant="h5">Title:</H>
            <P variant="p" className={styles.postTitle}>
                {title}
            </P>
            <H variant="h5">Body:</H> <P variant="small">{body}</P>
        </div>
    );
};

export default CardPost;
