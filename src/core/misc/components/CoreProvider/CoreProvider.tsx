import ThemeProvider from 'core/theme/components/ThemeProvider';
import { MultiLanguageSupportProvider } from '../../../translations/components/MultiLanguageSupportProvider';
import { combineContextProviders } from '../../utils';
import { ReactQueryProvider } from '../ReactQueryProvider';

const providers = [
    MultiLanguageSupportProvider,
    ReactQueryProvider,
    ThemeProvider,
];

const CoreProvider = combineContextProviders(...providers);

export default CoreProvider;
