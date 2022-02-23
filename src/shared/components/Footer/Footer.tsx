import { FC } from 'react';
import QLogo from '../../../assets/icons/q-logo.svg';
import TwitterLogo from '../../../assets/icons/twitter-logo.svg';
import FacebookLogo from '../../../assets/icons/facebook-logo.svg';
import InstagramLogo from '../../../assets/icons/instagram-logo.svg';
import YoutubeLogo from '../../../assets/icons/youtube-logo.svg';
import { SvgIcon } from '../SvgIcon';
import { useTranslate } from 'core/translations/hooks';
import styles from './Footer.module.scss';
import INavLink from 'shared/interfaces/INavLink';
import { RoutesEnum } from 'shared/enums/RoutesEnum';
import ILink from 'shared/interfaces/ILink';
import { Link } from '../Link';

const companyLinks: INavLink[] = [
    {
        id: 1,
        labelKey: 'nav-posts',
        pathname: RoutesEnum.POSTS,
    },
];

const socialLinks: ILink[] = [
    {
        id: 1,
        icon: InstagramLogo,
        href: '#',
    },
    {
        id: 2,
        icon: FacebookLogo,
        href: '#',
    },
    {
        id: 3,
        icon: TwitterLogo,
        href: '#',
    },
    {
        id: 4,
        icon: YoutubeLogo,
        href: '#',
    },
];

const Footer: FC = () => {
    const t = useTranslate();

    return (
        <footer className={styles.container}>
            <div className={styles.logo}>
                <SvgIcon spriteUrl={QLogo} className={styles.logoIcon} />
            </div>

            <nav className={styles.navbar}>
                {companyLinks.map(({ id, labelKey, pathname }) => (
                    <Link
                        key={id}
                        to={pathname}
                        variant="p"
                        className={styles.navbarLink}>
                        {t(labelKey)}
                    </Link>
                ))}
            </nav>

            <ul className={styles.social}>
                {socialLinks.map(({ href, icon }, index) => (
                    <li key={index} className={styles.socialItem}>
                        <SvgIcon
                            className={styles.socialIcon}
                            spriteUrl={icon ?? ''}
                            onClick={() => window.open(href, '_blank')}
                        />
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;
