import routes from '@/api/routes';
import type { AxiosInstance } from "axios";

export type RequestTokenResponseData = {
    accessToken: string;
}

export const ValidateToken = (axios: AxiosInstance) => (accessToken: string) => {
    return axios({
        method: 'GET',
        url: routes.auth.token.GET,
        withCredentials: true,
        headers: { Authorization: `Bearer ${accessToken}` }
    });
}

export const RequestToken = (axios: AxiosInstance) => () => {
    return axios({
        method: 'GET',
        url: routes.auth.token.new.GET,
        withCredentials: true
    });
}