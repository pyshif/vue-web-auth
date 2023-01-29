import type { AxiosError } from 'axios'

export type Auth = {
    token: string
    user: {
        name: string
        birthday: string
        phone: string
        gender: '' | 'male' | 'female'
        avatar: string
        email: string
    }
}

export type AuthHookReturn = {
    error: null | Error | AxiosError
    auth: null | Auth
}

export function isEmptyToken(auth: Auth) {
    return auth.token == ''
}

export function resetAuth(auth: Auth) {
    auth.token = ''
    auth.user = {
        name: '',
        birthday: '',
        phone: '',
        gender: '',
        avatar: '',
        email: '',
    }
}

export const initialState: Auth = {
    token: '',
    user: {
        name: '',
        birthday: '',
        phone: '',
        gender: '',
        avatar: '',
        email: '',
    },
}
