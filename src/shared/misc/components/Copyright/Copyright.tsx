import { FC } from 'react';
import styles from './Copyright.module.scss';

export interface CopyrightProps {
    logo?: JSX.Element;
    text?: string;
    companyName?: string;
}

const Copyright: FC<CopyrightProps> = ({ logo, text, companyName }) => (
    <div className={styles.container}>
        <p className={styles.text}>{text}</p>
        {logo}
        <p className={styles.body}>
            © {new Date().getFullYear()} {companyName}
        </p>
    </div>
);

export default Copyright;
