import { MutableRefObject, useEffect } from 'react';

interface IIntersectionObserver {
    root?: MutableRefObject<HTMLElement>;
    target: MutableRefObject<HTMLElement>;
    onIntersect: () => void;
    threshold?: number;
    rootMargin?: string;
    isDisabled?: boolean;
}

const useIntersectionObserver = ({
    root,
    target,
    onIntersect,
    threshold = 1.0,
    rootMargin = '0px',
    isDisabled = false,
}: IIntersectionObserver): void => {
    useEffect(() => {
        if (isDisabled) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach(
                    (entry) => entry.isIntersecting && onIntersect()
                ),
            {
                root: root?.current,
                rootMargin,
                threshold,
            }
        );

        const el = target?.current;

        if (!el) {
            return;
        }

        observer.observe(el);

        return () => {
            observer.unobserve(el);
        };
    });
};

export default useIntersectionObserver;
