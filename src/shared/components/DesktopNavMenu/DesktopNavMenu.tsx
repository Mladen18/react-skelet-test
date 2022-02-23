import { Badge } from '@mui/material';
import classNames from 'classnames';
import { useTranslate } from 'core/translations/hooks';
import { FC } from 'react';
import { INavLink } from 'shared/interfaces';
import { Link } from '../Link';
import { SvgIcon } from '../SvgIcon';
import menu from '../../../assets/icons/menu.svg';
import avatar from '../../../assets/icons/avatar.svg';
import notification from '../../../assets/icons/notification.svg';
import styles from './DesktopNavMenu.module.scss';

interface DesktopNavMenuProps {
    onOpen: () => void;
    menuItems: INavLink[];
}

const DesktopNavMenu: FC<DesktopNavMenuProps> = ({ onOpen, menuItems }) => {
    const t = useTranslate();

    return (
        <>
            <ul className={styles.navList}>
                {menuItems.map(({ id, labelKey, pathname }) => (
                    <li key={id}>
                        <Link variant="p" to={pathname}>
                            {t(labelKey)}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className={styles.navIcons}>
                <Badge
                    badgeContent={4}
                    color="default"
                    className={styles.navIcon}>
                    <SvgIcon
                        spriteUrl={notification}
                        className={styles.notificationIcon}
                    />
                </Badge>
                <SvgIcon
                    spriteUrl={avatar}
                    className={classNames(styles.navIcon, styles.avatarIcon)}
                />

                <SvgIcon
                    onClick={onOpen}
                    spriteUrl={menu}
                    className={classNames(styles.navIcon, styles.menuIcon)}
                />
            </div>
        </>
    );
};

export default DesktopNavMenu;
