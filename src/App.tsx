import { ThemeContext } from 'core/theme/context';
import { LoginPage } from 'modules/auth/pages/LoginPage';
import { RequestPasswordResetPage } from 'modules/auth/pages/RequestPasswordResetPage';
import { ResetPasswordPage } from 'modules/auth/pages/ResetPasswordPage';
import { FC, useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './modules/home/pages/HomePage';
import { GuestRoute, PrivateRoute } from './modules/navigation/components';
import { RoutesEnum } from './modules/navigation/enums';

const App: FC = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div data-theme={theme}>
            <Router>
                <Switch>
                    <GuestRoute
                        exact
                        path={RoutesEnum.LOGIN}
                        component={LoginPage}
                    />
                    <GuestRoute
                        exact
                        path={RoutesEnum.REQUEST_PASSWORD_RESET}
                        component={RequestPasswordResetPage}
                    />
                    <GuestRoute
                        exact
                        path={RoutesEnum.RESET_PASSWORD}
                        component={ResetPasswordPage}
                    />
                    <PrivateRoute path={RoutesEnum.HOME} component={HomePage} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
