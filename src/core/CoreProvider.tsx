import ThemeProvider from 'core/theme/ThemeProvider';
import { MultiLanguageSupportProvider } from './translations';
import { combineContextProviders } from './root/utils';
import { ReactQueryProvider } from './root/components/ReactQueryProvider';
import { MuiProvider } from './materialTheme';
import { PostsProvider } from './posts';

const providers = [
    MultiLanguageSupportProvider,
    ReactQueryProvider,
    ThemeProvider,
    MuiProvider,
    PostsProvider,
];

const CoreProvider = combineContextProviders(...providers);

export default CoreProvider;
