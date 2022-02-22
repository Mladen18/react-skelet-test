import { tokenService } from 'core/token/services/TokenService';
import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { RoutesEnum } from '../enums';

const GuestRoute: FC<RouteProps> = (routeProps) => {
    if (tokenService.token) {
        return <Redirect to={RoutesEnum.HOME} />;
    }

    return <Route {...routeProps} />;
};

export default GuestRoute;
