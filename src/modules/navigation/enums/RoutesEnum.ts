enum RoutesEnum {
    NOT_FOUND = '*',
    HOME = '/',
    MY_PROFILE = '/my-profile',
    LOGIN = '/login',
    REQUEST_PASSWORD_RESET = '/reset-password',
    RESET_PASSWORD = '/reset-password/:hash',
}

export default RoutesEnum;
