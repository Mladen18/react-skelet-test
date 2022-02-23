import { FC, useEffect } from 'react';
import { Container } from '@mui/material';
import logCompName from '../../../shared/utils/logMessage';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './GlobalLayout.module.scss';

const GlobalLayout: FC<{ message: string; compName: string }> = ({
    children,
    compName,
    message,
}) => {
    // Log Message props
    const componentName = compName;
    useEffect(() => {
        logCompName(message, componentName);
    }, [message]);

    return (
        <Container className={styles.container}>
            <Header />
            <main>{children}</main>
            <Footer />
        </Container>
    );
};

export default GlobalLayout;
