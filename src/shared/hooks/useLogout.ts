import { tokenService } from 'core/token/services/TokenService';
import { RoutesEnum } from 'shared/enums/RoutesEnum';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router';

interface IUseLogout {
    logout: () => void;
}

export const useLogout = (): IUseLogout => {
    const queryClient = useQueryClient();
    const { push } = useHistory();

    const logout = () => {
        queryClient.clear();
        tokenService.clear();
        push(RoutesEnum.LOGIN);
    };

    return {
        logout,
    };
};
