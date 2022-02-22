import { FC, useState } from 'react';
import { InfiniteScrollList } from 'shared/misc/components/InfiniteScrollList';
import mockedNotifications from 'shared/misc/mocks/mockedNotifications';
import { useLogout } from '../../auth/hooks';
import styles from './HomePage.module.scss';

const HomePage: FC = () => {
    const { logout } = useLogout();

    const [localNotifications, setLocalNotifications] =
        useState(mockedNotifications);
    const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);

    const fetchNextPage = () => {
        setIsFetchingNextPage(true);

        setTimeout(() => {
            setLocalNotifications((prevState) => {
                return [...prevState, ...mockedNotifications];
            });
            setIsFetchingNextPage(false);
        }, 2000);
    };

    // * ReactQuery example
    // const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    //     'notifications',
    //     apiService.get('/notifications'),
    //     {
    //         getNextPageParam: (page) =>
    //             page.current_page === page.last_page
    //                 ? undefined
    //                 : page.current_page + 1,
    //         onSuccess: (data) => console.log(data),
    //         onError: (error) => console.log(error),
    //     }
    // );

    return (
        <div className={styles.container}>
            {/* TODO: Page Layout */}
            {/* TODO: Navigation component */}
            {/* TODO: Switch */}
            <p>Homepage</p>

            <div className={styles.infiniteScrollList}>
                <InfiniteScrollList
                    isFetchingNextPage={isFetchingNextPage}
                    fetchNextPage={fetchNextPage}>
                    {localNotifications.map((notif, index) => (
                        <div key={index}>
                            {notif.title} - {`${notif.seen}`}
                        </div>
                    ))}
                </InfiniteScrollList>
            </div>

            <button onClick={fetchNextPage}>Daj jos</button>

            <button
                onClick={() => {
                    logout();
                }}>
                Logout
            </button>
        </div>
    );
};

export default HomePage;
