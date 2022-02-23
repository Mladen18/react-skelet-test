import { createTheme } from '@mui/material';
import { useCssVariable } from '../hooks';

//* PALETTE DECLARATION
declare module '@mui/material/styles' {
    interface Palette {
        tertiary: Palette['primary'];
        gray: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            main: string;
            D100: string;
            D200: string;
            D300: string;
            D400: string;
            D500: string;
            D600: string;
            D700: string;
        };
    }
    interface PaletteOptions {
        tertiary: PaletteOptions['primary'];
        gray: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            main: string;
            D100: string;
            D200: string;
            D300: string;
            D400: string;
            D500: string;
            D600: string;
            D700: string;
        };
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        tertiary: true;
    }
}

declare module '@mui/material/Checkbox' {
    interface CheckboxPropsColorOverrides {
        tertiary: true;
    }
}

const themePalette = createTheme({
    palette: {
        text: {
            primary: useCssVariable('--tertiary'),
        },
        primary: {
            main: useCssVariable('--primary'),
            dark: useCssVariable('--primary-dark'),
            light: useCssVariable('--primary-light'),
            contrastText: '#000000',
        },
        secondary: {
            main: useCssVariable('--secondary'),
            dark: useCssVariable('--secondary-dark'),
            light: useCssVariable('--secondary-light'),
            contrastText: '',
        },
        tertiary: {
            main: useCssVariable('--tertiary'),
            dark: '',
            light: '',
            contrastText: '',
        },
        info: {
            main: useCssVariable('--information-light'),
            dark: useCssVariable('--information-dark'),
            light: '',
            contrastText: '',
        },
        success: {
            main: useCssVariable('--success-light'),
            dark: useCssVariable('--success-dark'),
            light: '',
            contrastText: '',
        },
        error: {
            main: useCssVariable('--error-light'),
            dark: useCssVariable('--error-dark'),
            light: '',
            contrastText: '',
        },
        warning: {
            main: useCssVariable('--warning-light'),
            dark: useCssVariable('--warning-dark'),
            light: '',
            contrastText: '',
        },
        gray: {
            100: useCssVariable('--gray-light-100'),
            200: useCssVariable('--gray-light-200'),
            300: useCssVariable('--gray-light-300'),
            400: useCssVariable('--gray-light-400'),
            500: useCssVariable('--gray-light-500'),
            600: useCssVariable('--gray-light-600'),
            700: useCssVariable('--gray-light-700'),
            main: useCssVariable('--gray'),
            D100: useCssVariable('--gray-dark-100'),
            D200: useCssVariable('--gray-dark-200'),
            D300: useCssVariable('--gray-dark-300'),
            D400: useCssVariable('--gray-dark-400'),
            D500: useCssVariable('--gray-dark-500'),
            D600: useCssVariable('--gray-dark-100'),
            D700: useCssVariable('--gray-dark-100'),
        },
    },
});

export default themePalette.palette;
