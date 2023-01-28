import routes from '@/api/routes';
import type { AxiosInstance } from 'axios';


export const SignOut = (axios: AxiosInstance) => () => {
    return axios({
        method: 'DELETE',
        url: routes.auth.signOut.DELETE,
        withCredentials: true,
    })
}