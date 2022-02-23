import { FC } from 'react';
import { useQuery } from 'react-query';
import { PostsContext } from './context';
import useFetchPosts from './hooks/useFetchPosts';

const PostsProvider: FC = ({ children }) => {
    const { data, status } = useQuery(
        ['data', null],
        () => useFetchPosts(null, '2'),
        {
            staleTime: 10000,
        }
    );

    return (
        <PostsContext.Provider value={{ data, status }}>
            {children}
        </PostsContext.Provider>
    );
};

export default PostsProvider;
