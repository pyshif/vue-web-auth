import routes from '@/api/routes';
import { reverse } from 'named-urls';
import type { AxiosInstance } from 'axios';


export type SignUpData = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    passwordHint: string
}

export const SignUp = (axios: AxiosInstance) => (data: SignUpData) => {
    return axios({
        method: 'POST',
        url: routes.auth.signUp.POST,
        data
    });
}

export const ValidateEmailAddress = (axios: AxiosInstance) => (linkToken: string) => {
    return axios({
        method: 'GET',
        url: reverse(routes.auth.signUp._token.GET, { _token: linkToken })
    });
}