import { FC, useEffect, useState } from 'react';
import { IUser } from '../../interfaces';
import logCompName from '../../utils/logMessage';
import { H } from '../index';
import style from './User.module.scss';

type UserBlockProps = {
    users: IUser[] | null;
    message: string;
    id?: number;
    className?: string;
    compName?: string;
};

const UserBlock: FC<UserBlockProps> = ({
    users,
    message,
    id,
    className,
    compName,
}) => {
    const [loadUser, setLoadedUser] = useState<IUser>();

    // Log message props
    const componentName = compName;
    useEffect(() => {
        if (componentName) {
            logCompName(message, componentName);
        }
    }, [message]);

    // Find user by id
    useEffect(() => {
        if (users !== null && id !== null) {
            const user = users.find((item) => item.id === id);
            setLoadedUser(user);
        }
    }, [users, id]);

    return (
        <div className={className}>
            <H variant="h4" className={style.userText}>
                User name: {loadUser?.name}
            </H>
        </div>
    );
};

export default UserBlock;
