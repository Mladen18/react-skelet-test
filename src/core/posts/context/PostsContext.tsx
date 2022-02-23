import { createContext } from 'react';
import { IPost, IUser, IComment } from '../../../shared/interfaces';

interface AllData {
    data:
        | [{ data: IPost[] }, { data: IUser[] }, { data: IComment[] }]
        | undefined;
    status: string;
}

const PostsContext = createContext<AllData>({
    data: [{ data: [] }, { data: [] }, { data: [] }],
    status: '',
});

export default PostsContext;
