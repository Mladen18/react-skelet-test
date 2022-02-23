import { PostsContext } from 'core/posts/context';
import { FC, useEffect, useState, useContext } from 'react';
import {
    User,
    Comment,
    Post,
    Search,
    Link,
    PostLayout,
    GlobalLayout,
} from 'shared/components';
import { IPost, IUser, IComment } from '../../shared/interfaces';
import logCompName from '../../shared/utils/logMessage';
import styles from './PostList.module.scss';

type Posts = {
    message: string;
    compName: string;
};

const Posts: FC<Posts> = ({ message, compName }) => {
    const [searchValue, setSearchValue] = useState<string>('');

    // USe context
    const PostsCon = useContext(PostsContext);

    const { data, status } = PostsCon;

    const loadPosts: IPost[] = data ? data[0].data : [];
    const loadUsers: IUser[] = data ? data[1].data : [];
    const loadComments: IComment[] = data ? data[2].data : [];

    // Log Message props
    const componentName = compName;
    useEffect(() => {
        logCompName(message, componentName);
    }, [message]);

    // Search handler value
    const searchHandler = (value: string): string => {
        setSearchValue(value);
        return value;
    };

    // Filter posts
    const ifSearch = loadPosts ? loadPosts : [];
    const filteredPosts = ifSearch.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (
        <GlobalLayout compName="Global Layout" message={message}>
            <section className={styles.posts}>
                <Search
                    searchHandler={searchHandler}
                    className={''}
                    message={message}
                    name="Search"
                    id="Search"
                    label=""
                    compName="Search"
                    placeholder="Search"
                />
                <div className={styles.postList}>
                    <ul className={styles.postList__items}>
                        {status === 'success' &&
                            (loadPosts.length > 0 &&
                            filteredPosts.length > 0 ? (
                                (searchValue === ''
                                    ? loadPosts
                                    : filteredPosts
                                ).map((item) => (
                                    <li
                                        className={styles.postList__item}
                                        key={item.id}>
                                        <Link
                                            to={`/post/${item.id}`}
                                            className={styles.postList__link}>
                                            <PostLayout
                                                message={message}
                                                className={''}
                                                compName={'Post Layout'}>
                                                <User
                                                    id={item.id}
                                                    users={loadUsers}
                                                    message={message}
                                                    compName={'User Block'}
                                                />
                                                <Post
                                                    title={item.title}
                                                    body={item.body}
                                                    message={message}
                                                    compName={'Post Block'}
                                                    className={''}
                                                />
                                                <Comment
                                                    id={item.id}
                                                    comments={loadComments}
                                                    message={message}
                                                    compName={'Comment Block'}
                                                />
                                            </PostLayout>
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <h1>No posts found</h1>
                            ))}
                    </ul>
                </div>
            </section>
        </GlobalLayout>
    );
};

export default Posts;
