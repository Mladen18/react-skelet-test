import { useEffect, useState, FC } from 'react';
import { IComment } from '../../interfaces';
import styles from './Comment.module.scss';
import logCompName from '../../utils/logMessage';
import { H, P } from '../index';

type CommentBlock = {
    comments: IComment[] | null;
    message: string;
    id?: number | null;
    compName?: string;
    className?: string;
};

const CommentBlock: FC<CommentBlock> = ({
    comments,
    message,
    id,
    className,
    compName,
}) => {
    const [loadComments, setLoadedComments] = useState<IComment[]>([]);

    // Log message props
    const componentName = compName;
    useEffect(() => {
        if (componentName) {
            logCompName(message, componentName);
        }
    }, [message]);

    useEffect(() => {
        let comment = comments;
        if (comments !== null && id !== null) {
            comment = comments.filter((item) => item.postId === id);
            setLoadedComments(comment);
        } else {
            if (comments !== null) {
                setLoadedComments(comments);
            }
        }
    }, [comments, id]);

    return (
        <div className={styles.comments + ' ' + className}>
            <H variant="h5">Comments:</H>
            <div className={styles.commentsList}>
                <ul>
                    {loadComments.length > 0 ? (
                        loadComments.map((item) => (
                            <li key={item.id}>
                                <P variant="p">
                                    {item.name} {item.email}
                                </P>
                                <P variant="small">{item.body}</P>
                            </li>
                        ))
                    ) : (
                        <H variant="h4">No comments</H>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CommentBlock;
