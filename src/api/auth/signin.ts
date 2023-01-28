import routes from '@/api/routes';
import type { AxiosInstance } from 'axios';


export type SignInData = {
    email: string,
    password: string
}

export type SignInResponseData = {
    accessToken: string
}

export const SignIn = (axios: AxiosInstance) => (data: SignInData) => {
    return axios({
        method: 'POST',
        url: routes.auth.signIn.POST,
        withCredentials: true,
        data
    });
}