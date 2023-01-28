import routes from '@/api/routes';
import type { AxiosInstance } from 'axios';

export type ResetPasswordData = {
    newPassword: string,
    confirmPassword: string,
};

export const ResetPassword = (axios: AxiosInstance) => (accessToken: string, data: ResetPasswordData) => {
    return axios({
        method: 'POST',
        url: routes.auth.reset.POST,
        data,
        headers: { Authorization: `Bearer ${accessToken}` }
    });
}