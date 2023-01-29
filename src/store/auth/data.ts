export type Auth = {
    token: null | string
    user: {
        name: null | string
        birthday: null | string
        phone: null | string
        gender: null | 'male' | 'female'
        avatar: null | string
        email: null | string
    }
}

export function isEmptyToken(auth: Auth) {
    return auth.token == null
}

export function resetAuth(auth: Auth) {
    auth.token = null
    auth.user = {
        name: null,
        birthday: null,
        phone: null,
        gender: null,
        avatar: null,
        email: null,
    }
}

export const initialState = {
    token: null,
    user: {
        name: null,
        birthday: null,
        phone: null,
        gender: null,
        avatar: null,
        email: null,
    },
}
