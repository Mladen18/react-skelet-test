import { FC, useEffect, useContext, useState } from 'react';
import { PostsContext } from 'core/posts/context';
import logCompName from '../../shared/utils/logMessage';
import { useParams } from 'react-router-dom';
import { IPost } from '../../shared/interfaces';
import {
    User,
    Comment,
    Post,
    PostLayout,
    GlobalLayout,
    H,
} from 'shared/components';
import style from './SinglePost.module.scss';

type SinglePost = {
    message: string;
    compName: string;
};

const SinglePost: FC<SinglePost> = ({ message, compName }) => {
    const [post, setPost] = useState<IPost | undefined>();
    // Log Message props
    const componentName = compName;
    useEffect(() => {
        logCompName(message, componentName);
    }, [message]);

    // Get Item ID from URL
    const { postId } = useParams() as {
        postId: string;
    };

    const PostsCon = useContext(PostsContext);

    const { data, status } = PostsCon;

    useEffect(() => {
        if (data && data[0] && postId !== null) {
            const getPost = data[0].data.find((item) => item.id === +postId);
            setPost(getPost);
        }
    }, [setPost, postId, data]);

    const loadUsers = data ? data[1].data : [];
    const loadComments = data ? data[2].data : [];

    return (
        <GlobalLayout message={message} compName={'Global Layout'}>
            <PostLayout
                message={message}
                className={style.auto}
                compName={'Post Layout'}>
                {status === 'loading' && <H variant="h2">Loading...</H>}
                {status === 'error' && <H variant="h2">Error</H>}
                {status === 'success' && post && (
                    <>
                        <User
                            id={post.id}
                            users={loadUsers}
                            message={message}
                            compName={'User Block'}
                        />
                        <Post
                            title={post.title}
                            body={post.body}
                            message={message}
                            compName={'Post Block'}
                        />

                        {loadComments !== null && loadComments.length > 0 ? (
                            <Comment
                                comments={loadComments}
                                id={post.id}
                                message={message}
                                compName={'Comment Block'}
                            />
                        ) : (
                            <h2>No comments found</h2>
                        )}
                    </>
                )}
            </PostLayout>
        </GlobalLayout>
    );
};
export default SinglePost;
