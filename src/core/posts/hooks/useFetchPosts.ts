import { IPost, IUser, IComment } from '../../../shared/interfaces';
import { apiService } from '../../api/services/ApiService';

const useFetchPosts = async (
    id: number | null,
    name: string
): Promise<
    [{ data: IPost[] }, { data: IUser[] }, { data: IComment[] }] | undefined
> => {
    switch (name) {
        case '1': {
            const [postData, userData, commentData] = await Promise.all([
                apiService.get<IPost[]>(`/posts/${id}`),
                apiService.get<IUser[]>(`/users`),
                apiService.get<IComment[]>(`/posts/${id}/comments`),
            ]);
            return [postData, userData, commentData];
        }
        case '2': {
            const [postsData, usersData, commentsData] = await Promise.all([
                apiService.get<IPost[]>(`/posts`),
                apiService.get<IUser[]>(`/users`),
                apiService.get<IComment[]>(`/comments`),
            ]);
            return [postsData, usersData, commentsData];
        }
        default: {
            console.log('Error');
        }
    }
};

export default useFetchPosts;
