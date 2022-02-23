import IRegistrationCredentials from 'auth/shared/interfaces/IRegistrationCredentials';

const EMPTY_REGISTRATION_CREDENTIALS: IRegistrationCredentials = {
    name: '',
    email: '',
    password: '',
    newsletter: false,
};

export default EMPTY_REGISTRATION_CREDENTIALS;
