import { tokenService } from 'core/token/services/TokenService';
import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { RoutesEnum } from 'shared/enums/RoutesEnum';
import { ILocationState } from 'shared/interfaces/ILocationState';

const PrivateRoute: FC<RouteProps> = (routeProps) => {
    if (tokenService.token) {
        return <Route {...routeProps} />;
    }

    const locationState: ILocationState = {
        from: {
            pathname: routeProps.location?.pathname,
        },
    };

    return (
        <Redirect
            to={{
                pathname: RoutesEnum.LOGIN,
                state: locationState,
            }}
        />
    );
};

export default PrivateRoute;
