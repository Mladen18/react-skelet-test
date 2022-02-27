import { FC, useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { SvgIcon } from '../SvgIcon';
import INavLink from 'shared/interfaces/INavLink';
import { RoutesEnum } from 'shared/enums/RoutesEnum';
import logo from '../../../assets/icons/q-logo.svg';
import { MobileNavMenu } from '../MobileNavMenu';
import { tokenService } from 'core/token/services/TokenService';
import { DesktopNavMenu } from '../DesktopNavMenu';
import styles from './Header.module.scss';

const menuItems: INavLink[] = [
    {
        id: 1,
        labelKey: 'nav-posts',
        pathname: RoutesEnum.POSTS,
    },
    {
        id: 2,
        labelKey: 'nav-form',
        pathname: RoutesEnum.FORM,
    },
];

const Header: FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <AppBar position="static" className={styles.header}>
                <Toolbar className={styles.toolbar}>
                    <nav className={styles.nav}>
                        <SvgIcon spriteUrl={logo} className={styles.logoIcon} />

                        <>
                            <DesktopNavMenu
                                onOpen={() => setMobileOpen(true)}
                                menuItems={menuItems}
                            />
                            <MobileNavMenu
                                open={mobileOpen}
                                onClose={() => setMobileOpen(false)}
                                menuItems={menuItems}
                            />
                        </>
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
