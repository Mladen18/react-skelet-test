import { FC } from 'react';
import styles from './AuthLayout.module.scss';

const AuthLayout: FC = ({ children }) => (
    <div className={styles.container}>{children}</div>
);

export default AuthLayout;
