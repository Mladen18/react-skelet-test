import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CoreProvider } from './core/misc/components/CoreProvider';
import './core/translations/utils/i18n';
import './index.scss';
import { Spinner } from './shared/misc/components/Spinner';

ReactDOM.render(
    <StrictMode>
        <Suspense fallback={<Spinner />}>
            <CoreProvider>
                <App />
            </CoreProvider>
        </Suspense>
    </StrictMode>,
    document.getElementById('root')
);
