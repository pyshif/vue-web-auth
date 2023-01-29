import type { AxiosError } from '@/api'
import type { Auth } from './data'
import { apiRequestToken, apiValidateToken } from '@/api'
import decodeJWT from 'jwt-decode'

export type ApiRequestToken = () => Promise<Auth | AxiosError>
export type ApiValidateToken = () => Promise<void | Error>

export function createUseRequestToken(auth: Auth): ApiRequestToken {
    return async () => {
        try {
            // use refresh-token which store in cookie to request new access-token
            const response = await apiRequestToken()
            // console.log('response :>> ', response)
            const { accessToken } = response.data
            auth.token = accessToken
            auth.user = decodeJWT(accessToken)
            return auth
        } catch (error) {
            return error as AxiosError
        }
    }
}

export function createUserValidateToken(auth: Auth): ApiValidateToken {
    return async () => {
        try {
            const response = await apiValidateToken(auth.token)
            // console.log('response :>> ', response);
            if (response.status != 200) throw new Error('failed to validate access-token!')
            return
        } catch (error) {
            return error as Error
        }
    }
}