import { tokenService } from 'core/token/services/TokenService';
import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { RoutesEnum } from 'shared/enums/RoutesEnum';

type ConsoleMsg = {
    message: string;
};
type GroupProps = RouteProps | ConsoleMsg;

const GuestRoute: FC<GroupProps> = (routeProps) => {
    if (tokenService.token) {
        return <Redirect to={RoutesEnum.HOME} />;
    }

    return <Route {...routeProps} />;
};

export default GuestRoute;
