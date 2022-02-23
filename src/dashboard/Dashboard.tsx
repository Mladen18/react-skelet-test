import { Button } from '@mui/material';
import { FC } from 'react';
import { H, P } from 'shared/components';
import { useLogout } from 'shared/hooks/useLogout';
import styles from './Dashboard.module.scss';

const Dashboard: FC = () => {
    const { logout } = useLogout();
    return (
        <div className={styles.container}>
            {/* TODO: Page Layout */}
            {/* TODO: Navigation component */}
            {/* TODO: Switch */}

            <H variant="h1">H1 text</H>
            <H variant="h2">h2 text</H>
            <H variant="h3">h3 text</H>
            <H variant="h4">h4 text</H>
            <H variant="h5">h5 text</H>
            <H variant="h6">h6 text</H>
            <P variant="intro">Paragraph intro</P>
            <P variant="big">Paragraph big</P>
            <P>Paragraph Basic</P>
            <P variant="small">Paragraph small</P>

            <Button variant="contained" color="primary">
                Contained primary
            </Button>
            <br />
            <br />
            <Button variant="contained" color="primary" size="large">
                Contained primary large
            </Button>
            <br />
            <br />
            <Button disabled variant="contained" color="primary">
                Contained primary disabled
            </Button>
            <br />
            <br />
            <Button variant="contained" color="secondary">
                Contained secondary
            </Button>
            <br />
            <br />
            <Button variant="contained" color="secondary" size="large">
                Contained secondary large
            </Button>
            <br />
            <br />
            <Button disabled variant="contained" color="secondary">
                Contained secondary disabled
            </Button>
            <br />
            <br />
            <Button variant="contained" color="tertiary">
                Contained tertiary
            </Button>
            <br />
            <br />
            <Button variant="contained" color="tertiary" size="large">
                Contained tertiary large
            </Button>
            <br />
            <br />
            <Button disabled variant="contained" color="tertiary">
                Contained tertiary disabled
            </Button>
            <br />
            <br />
            <Button variant="outlined" color="primary">
                outlined primary
            </Button>
            <br />
            <br />
            <Button variant="outlined" color="primary" size="large">
                outlined primary large
            </Button>
            <br />
            <br />
            <Button disabled variant="outlined" color="primary">
                outlined primary disabled
            </Button>
            <br />
            <br />
            <Button variant="text">text primary</Button>
            <br />
            <br />
            <Button variant="text" size="large">
                text primary large
            </Button>
            <br />
            <br />
            <Button disabled variant="text">
                text primary disabled
            </Button>

            <button
                onClick={() => {
                    logout();
                }}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
