export type Auth = {
    token: string,
    user: {
        name: string,
        birthday: string,
        phone: string,
        gender: 'male' | 'female' | '',
        avatar: string,
        email: string
    },
}

export function resetAuth(auth: Auth) {
    auth.token = ''
    auth.user = {
        name: '',
        birthday: '',
        phone: '',
        gender: '',
        avatar: '',
        email: ''
    }
}

export const initialState = {
    token: '',
    user: {
        name: '',
        birthday: '',
        phone: '',
        gender: '',
        avatar: '',
        email: ''
    }
}