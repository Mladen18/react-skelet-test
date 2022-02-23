import './index.scss'; //must be imported before CoreProvider because of CSS Variables
import { CoreProvider } from 'core';
import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './core/translations/utils/i18n';
import { Spinner } from './shared/components/Spinner';

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
