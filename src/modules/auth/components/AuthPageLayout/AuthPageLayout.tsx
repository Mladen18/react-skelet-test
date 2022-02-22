import { FC } from 'react';
import styles from './AuthPageLayout.module.scss';

const AuthPageLayout: FC = ({ children }) => (
    <div className={styles.container}>{children}</div>
);

export default AuthPageLayout;
