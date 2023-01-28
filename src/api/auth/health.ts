import type { AxiosInstance} from 'axios'
import routes from '@/api/routes'

export const Health = (axios: AxiosInstance) => () => {
    return axios({
        method: 'GET',
        url: routes.auth.health.GET
    });
}