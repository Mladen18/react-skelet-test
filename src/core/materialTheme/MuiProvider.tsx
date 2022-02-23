import { FC } from 'react';
import {
    createTheme,
    StyledEngineProvider,
    ThemeProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { breakpoints, components, palette, typography } from './themePartials';

let theme = createTheme();

theme = {
    ...theme,
    breakpoints,
    typography,
    palette,
    components,
};

const MuiProvider: FC = ({ children }) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default MuiProvider;
