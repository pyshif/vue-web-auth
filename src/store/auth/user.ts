import type { AxiosError } from '@/api'
import { isEmptyToken, type Auth } from './data'
import {
    apiUpdateUserName,
    apiUpdateUserBirthday,
    apiUpdateUserPhone,
    apiUpdateUserGender,
    apiUpdateUserEmail,
    apiUpdateUserAvatar,
} from '@/api'

export type ApiUpdateUserName = (name: string) => Promise<void | Error | AxiosError>
export type ApiUpdateUserBirthday = (birthday: string) => Promise<void | Error | AxiosError>
export type ApiUpdateUserPhone = (phone: string) => Promise<void | Error | AxiosError>
export type ApiUpdateUserGender = (gender: 'male' | 'female') => Promise<void | Error | AxiosError>
export type ApiUpdateUserEmail = (email: string) => Promise<void | Error | AxiosError>
export type ApiUpdateUserAvatar = (data: FormData) => Promise<void | Error | AxiosError>

// implementation
export function createUseUpdateUserName(auth: Auth): ApiUpdateUserName {
    return async (name) => {
        try {
            if (isEmptyToken(auth)) throw new Error('failed to update user name! (invalid token)')
            const response = await apiUpdateUserName(auth.token, name)
            // console.log('response :>> ', response);
            if (response.status != 200) throw new Error('failed to update user name')
            return
        } catch (error) {
            return error as Error | AxiosError
        }
    }
}

export function createUseUpdateUserBirthday(auth: Auth): ApiUpdateUserBirthday {
    return async (birthday) => {
        try {
            if (isEmptyToken(auth)) throw new Error('failed to update user birthday! (invalid token)')
            const response = await apiUpdateUserBirthday(auth.token, birthday)
            // console.log('response :>> ', response);
            if (response.status != 200) throw new Error('failed to update user birthday!')
            return
        } catch (error) {
            return error as Error | AxiosError
        }
    }
}

export function createUseUpdateUserPhone(auth: Auth): ApiUpdateUserPhone {
    return async (phone) => {
        try {
            if (isEmptyToken(auth)) throw new Error('failed to update user phone! (invalid token)')
            const response = await apiUpdateUserPhone(auth.token, phone)
            // console.log('response :>> ', response);
            if (response.status != 200) throw new Error('failed to update user phone!')
            return
        } catch (error) {
            return error as Error | AxiosError
        }
    }
}

export function createUseUpdateUserGender(auth: Auth): ApiUpdateUserGender {
    return async (gender) => {
        try {
            if (isEmptyToken(auth)) throw new Error('failed to update user gender! (invalid token)')
            const response = await apiUpdateUserGender(auth.token, gender)
            // console.log('response :>> ', response);
            if (response.status != 200) throw new Error('failed to update user gender!')
            return
        } catch (error) {
            return error as Error | AxiosError
        }
    }
}

export function createUserUpdateUserEmail(auth: Auth): ApiUpdateUserEmail {
    return async (email) => {
        try {
            if (isEmptyToken(auth)) throw new Error('failed to update user email! (invalid token)')
            const response = await apiUpdateUserEmail(auth.token, email)
            // console.log('response :>> ', response);
            if (response.status != 200) throw new Error('failed to update user email!')
            return
        } catch (error) {
            return error as Error | AxiosError
        }
    }
}

export function createUseUpdateUserAvatar(auth: Auth): ApiUpdateUserAvatar {
    return async (avatar) => {
        try {
            if (isEmptyToken(auth)) throw new Error('failed to update user avatar! (invalid token)')
            const response = await apiUpdateUserAvatar(auth.token, avatar)
            // console.log('response :>> ', response);
            if (response.status != 200) throw new Error('failed to update user avatar!')
            return
        } catch (error) {
            return error as Error | AxiosError
        }
    }
}
