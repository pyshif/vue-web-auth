import type { Axios, AxiosInstance } from 'axios';
import routes from '@/api/routes';
import { reverse } from 'named-urls';

export type UpdateUserAvatarData = FormData;

export const DeleteUser = (axios: AxiosInstance) => (accessToken: string) => {
    return axios({
        method: 'DELETE',
        url: routes.auth.user.DELETE,
        headers: { Authorization: `Bearer ${accessToken}` }
    });
}

export const UpdateUserName = (axios: AxiosInstance) => (accessToken: string, name: string) => {
    return axios({
        method: 'POST',
        url: routes.auth.user.name.POST,
        data: {
            name
        },
        headers: { Authorization: `Bearer ${accessToken}` }
    });
}

export const UpdateUserBirthday = (axios: AxiosInstance) => (accessToken: string, birthday: string) => {
    return axios({
        method: 'POST',
        url: routes.auth.user.birthday.POST,
        data: {
            birthday,
        },
        headers: { Authorization: `Bearer ${accessToken}` }
    });
}


export const UpdateUserPhone = (axios: AxiosInstance) => (accessToken: string, phone: string) => {
    return axios({
        method: 'POST',
        url: routes.auth.user.phone.POST,
        data: {
            phone
        },
        headers: { Authorization: `Bearer ${accessToken}` }
    })
}
export const UpdateUserGender = (axios: AxiosInstance) => (accessToken: string, gender: 'male' | 'female') => {
    return axios({
        method: 'POST',
        url: routes.auth.user.gender.POST,
        data: {
            gender
        },
        headers: { Authorization: `Bearer ${accessToken}` }
    })
}

export const UpdateUserEmail = (axios: AxiosInstance) => (accessToken: string, email: string) => {
    return axios({
        method: 'POST',
        url: routes.auth.user.email.POST,
        data: {
            email
        },
        headers: { Authorization: `Bearer ${accessToken}` }
    });
}

export const UpdateUserAvatar = (axios: AxiosInstance) => (accessToken: string, data: UpdateUserAvatarData) => {
    return axios({
        method: 'POST',
        url: routes.auth.user.avatar.POST,
        data,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const ValidateUserNewEmail = (axios: AxiosInstance) => (linkToken: string) => {
    return axios({
        method: 'GET',
        url: reverse(routes.auth.user.email._token.GET, { _token: linkToken }),
    });
}