import routes from '@/api/routes';
import type { Axios, AxiosInstance } from "axios";

export const TellMe = (axios: AxiosInstance) => (accessToken: string, feedback: string) => {
    return axios({
        method: 'POST',
        url: routes.help.tellme.POST,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        data: {
            feedback
        }
    })
}