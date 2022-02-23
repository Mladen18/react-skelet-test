import { AppBar, Button, Dialog, Toolbar } from '@mui/material';
import { FC } from 'react';
import { INavLink } from 'shared/interfaces';
import { Link } from '../Link';
import { SvgIcon } from '../SvgIcon';
import close from '../../../assets/icons/close.svg';
import logo from '../../../assets/icons/q-logo.svg';
import { useTranslate } from 'core/translations/hooks';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import styles from './MobileNavMenu.module.scss';

interface MobileNavMenuProps {
    open: boolean;
    onClose: () => void;
    menuItems: INavLink[];
}

const MobileNavMenu: FC<MobileNavMenuProps> = ({
    open,
    onClose,
    menuItems,
}) => {
    const t = useTranslate();
    const location = useLocation();

    return (
        <Dialog fullScreen open={open} onClose={onClose}>
            <AppBar className={styles.mobileAppBar}>
                <Toolbar>
                    <SvgIcon
                        spriteUrl={logo}
                        className={styles.mobileLogoIcon}
                    />

                    <Button
                        className={styles.closeBtn}
                        autoFocus
                        color="inherit"
                        onClick={onClose}>
                        <SvgIcon
                            spriteUrl={close}
                            className={styles.mobileCloseIcon}
                        />
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={styles.menuContent}>
                {menuItems.map(({ id, labelKey, pathname }) => (
                    <Link
                        className={classNames(styles.menuItem, {
                            [styles.itemActive]: pathname === location.pathname,
                        })}
                        variant="h3"
                        to={pathname}
                        key={id}>
                        {t(labelKey)}
                    </Link>
                ))}
            </div>
        </Dialog>
    );
};

export default MobileNavMenu;
