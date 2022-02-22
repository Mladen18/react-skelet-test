import { FC, MutableRefObject, useRef } from 'react';
import { useIntersectionObserver } from 'shared/misc/hooks';

interface InfiniteScrollListProps {
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
}

const InfiniteScrollList: FC<InfiniteScrollListProps> = ({
    children,
    fetchNextPage,
    isFetchingNextPage,
}) => {
    const loadMoreRef = useRef() as MutableRefObject<HTMLDivElement>;

    useIntersectionObserver({
        target: loadMoreRef,
        onIntersect: fetchNextPage,
        isDisabled: isFetchingNextPage,
    });

    return (
        <>
            {children}
            <div ref={loadMoreRef}>{isFetchingNextPage && 'Loading...'}</div>
        </>
    );
};

export default InfiniteScrollList;
