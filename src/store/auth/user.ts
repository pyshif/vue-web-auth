import type { Auth, AuthHookReturn } from './data'
import { isEmptyToken } from './data'
import {
    apiUpdateUserName,
    apiUpdateUserBirthday,
    apiUpdateUserPhone,
    apiUpdateUserGender,
    apiUpdateUserEmail,
    apiUpdateUserAvatar,
} from '@/api'

export type ApiUpdateUserName = (name: string) => Promise<AuthHookReturn>
export type ApiUpdateUserBirthday = (
    birthday: string
) => Promise<AuthHookReturn>
export type ApiUpdateUserPhone = (phone: string) => Promise<AuthHookReturn>
export type ApiUpdateUserGender = (
    gender: '' | 'male' | 'female'
) => Promise<AuthHookReturn>
export type ApiUpdateUserEmail = (email: string) => Promise<AuthHookReturn>
export type ApiUpdateUserAvatar = (data: FormData) => Promise<AuthHookReturn>

// implementation
export function createUseUpdateUserName(auth: Auth): ApiUpdateUserName {
    return async (name) => {
        try {
            if (isEmptyToken(auth))
                throw new Error('failed to update user name! (invalid token)')
            const response = await apiUpdateUserName(auth.token, name)
            // console.log('response :>> ', response);
            if (response.status != 200)
                throw new Error('failed to update user name')
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}

export function createUseUpdateUserBirthday(auth: Auth): ApiUpdateUserBirthday {
    return async (birthday) => {
        try {
            if (isEmptyToken(auth))
                throw new Error(
                    'failed to update user birthday! (invalid token)'
                )
            const response = await apiUpdateUserBirthday(auth.token, birthday)
            // console.log('response :>> ', response);
            if (response.status != 200)
                throw new Error('failed to update user birthday!')
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}

export function createUseUpdateUserPhone(auth: Auth): ApiUpdateUserPhone {
    return async (phone) => {
        try {
            if (isEmptyToken(auth))
                throw new Error('failed to update user phone! (invalid token)')
            const response = await apiUpdateUserPhone(auth.token, phone)
            // console.log('response :>> ', response);
            if (response.status != 200)
                throw new Error('failed to update user phone!')
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}

export function createUseUpdateUserGender(auth: Auth): ApiUpdateUserGender {
    return async (gender) => {
        try {
            if (isEmptyToken(auth))
                throw new Error('failed to update user gender! (invalid token)')
            const response = await apiUpdateUserGender(auth.token, gender)
            // console.log('response :>> ', response);
            if (response.status != 200)
                throw new Error('failed to update user gender!')
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}

export function createUseUpdateUserEmail(auth: Auth): ApiUpdateUserEmail {
    return async (email) => {
        try {
            if (isEmptyToken(auth))
                throw new Error('failed to update user email! (invalid token)')
            const response = await apiUpdateUserEmail(auth.token, email)
            // console.log('response :>> ', response);
            if (response.status != 200)
                throw new Error('failed to update user email!')
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}

export function createUseUpdateUserAvatar(auth: Auth): ApiUpdateUserAvatar {
    return async (avatar) => {
        try {
            if (isEmptyToken(auth))
                throw new Error('failed to update user avatar! (invalid token)')
            const response = await apiUpdateUserAvatar(auth.token, avatar)
            // console.log('response :>> ', response);
            if (response.status != 200)
                throw new Error('failed to update user avatar!')
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}
