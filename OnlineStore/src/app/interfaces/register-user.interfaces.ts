export interface IRegisterUser
{
    firstName: string;
    lastname: string;
    email: string;
    userName: string;
    password: string;
    confirmPassword: string;
    userIpAddress: string;
}

export interface IRegisterResponse
{
    message: string;
    isRegistered: boolean;
}