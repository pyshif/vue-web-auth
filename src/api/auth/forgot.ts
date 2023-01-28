import routes from '@/api/routes';
import type { AxiosInstance } from 'axios';
import { reverse } from 'named-urls';

// request data type
export type ForgotData = {
    email: string,
    passwordHint: string,
}

export type ResetPasswordByLinkData = {
    newPassword: string,
    confirmPassword: string,
}

export const ForgotPassword = (axios: AxiosInstance) => (data: ForgotData) => {
    return axios({
        method: 'POST',
        url: routes.auth.forgot.POST,
        data,
    })
}

export const ResetPasswordByLink = (axios: AxiosInstance) => (linkToken: string, data: ResetPasswordByLinkData) => {
    return axios({
        method: 'POST',
        url: reverse(routes.auth.forgot._token.POST, { _token: linkToken }),
        data,
    })
}