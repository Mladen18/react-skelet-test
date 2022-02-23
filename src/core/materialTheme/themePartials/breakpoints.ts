import { createTheme } from '@mui/material';

// * BREAKPOINTS OVERRIDE
declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        xl: false;
    }
}

const themeBreakpoints = createTheme({
    breakpoints: {
        values: {
            sm: 0,
            md: 768,
            lg: 1320,
        },
    },
});

export default themeBreakpoints.breakpoints;
