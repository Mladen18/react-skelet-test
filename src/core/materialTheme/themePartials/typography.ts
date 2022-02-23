import { createTheme } from '@mui/material';
import breakpoints from './breakpoints';

// * TYPOGRAPHY DECLARATION
declare module '@mui/material/styles' {
    interface TypographyVariants {
        p: React.CSSProperties;
        intro: React.CSSProperties;
        small: React.CSSProperties;
        big: React.CSSProperties;
        link: React.CSSProperties;
        label: React.CSSProperties;
        badge: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        p?: React.CSSProperties;
        intro?: React.CSSProperties;
        small?: React.CSSProperties;
        big?: React.CSSProperties;
        link?: React.CSSProperties;
        label?: React.CSSProperties;
        badge?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        p: true;
        intro: true;
        small: true;
        big: true;
        link: true;
        label: true;
        badge: true;
    }
}

const themeTypography = createTheme({
    typography: {
        fontFamily: 'Rubik, sans-serif',
        h1: {
            fontFamily: 'Rubik, sans-serif',
            fontSize: '44px',
            lineHeight: '54px',
            fontWeight: 600,
            [breakpoints.up('md')]: {
                fontSize: '50px',
                lineHeight: '62px',
            },
            [breakpoints.up('lg')]: {
                fontSize: '64px',
                lineHeight: '80px',
            },
        },
        h2: {
            fontSize: '32px',
            lineHeight: '40px',
            fontWeight: 600,
            [breakpoints.up('md')]: {
                fontSize: '38px',
                lineHeight: '48px',
            },
            [breakpoints.up('lg')]: {
                fontSize: '45px',
                lineHeight: '56px',
            },
        },
        h3: {
            fontSize: '24px',
            lineHeight: '30px',
            fontWeight: 600,
            [breakpoints.up('md')]: {
                fontSize: '28px',
                lineHeight: '34px',
            },
            [breakpoints.up('lg')]: {
                fontSize: '36px',
                lineHeight: '46px',
            },
        },
        h4: {
            fontSize: '18px',
            lineHeight: '22px',
            fontWeight: 600,
            [breakpoints.up('md')]: {
                fontSize: '22px',
                lineHeight: '28px',
            },
            [breakpoints.up('lg')]: {
                fontSize: '24px',
                lineHeight: '30px',
            },
        },
        h5: {
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: 600,
            [breakpoints.up('md')]: {
                fontSize: '16px',
                lineHeight: '20px',
            },
            [breakpoints.up('lg')]: {
                fontSize: '16px',
                lineHeight: '20px',
            },
        },
        h6: {
            fontSize: '12px',
            lineHeight: '16px',
        },
        intro: {
            fontSize: '24px',
            lineHeight: '36px',
            [breakpoints.up('md')]: {
                fontSize: '28px',
                lineHeight: '42px',
            },
            [breakpoints.up('lg')]: {
                fontSize: '36px',
                lineHeight: '54px',
            },
        },
        big: {
            fontSize: '18px',
            lineHeight: '26px',
            [breakpoints.up('md')]: {
                fontSize: '22px',
                lineHeight: '32px',
            },
            [breakpoints.up('lg')]: {
                fontSize: '24px',
                lineHeight: '36px',
            },
        },
        p: {
            fontSize: '14px',
            lineHeight: '20px',
            [breakpoints.up('md')]: {
                fontSize: '16px',
                lineHeight: '24px',
            },
        },
        small: {
            fontSize: '12px',
            lineHeight: '18px',
        },
        button: {
            fontSize: '14px',
            lineHeight: '24px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            [breakpoints.up('md')]: {
                fontSize: '16px',
                lineHeight: '24px',
            },
        },
        link: {
            fontSize: '14px',
            lineHeight: '18px',
            letterSpacing: '1px',
            textDecoration: 'underline',
            [breakpoints.up('md')]: {
                fontSize: '16px',
                lineHeight: '20px',
            },
        },
        label: {
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '12px',
            lineHeight: '16px',
        },
        badge: {
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '10px',
            lineHeight: '12px',
        },
    },
});

export default themeTypography.typography;
