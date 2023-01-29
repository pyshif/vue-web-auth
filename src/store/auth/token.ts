import type { Auth, AuthHookReturn } from './data'
import { apiRequestToken, apiValidateToken } from '@/api'
import decodeJWT from 'jwt-decode'

export type ApiRequestToken = () => Promise<AuthHookReturn>
export type ApiValidateToken = () => Promise<AuthHookReturn>

export function createUseRequestToken(auth: Auth): ApiRequestToken {
    return async () => {
        try {
            // use refresh-token which store in cookie to request new access-token
            const response = await apiRequestToken()
            // console.log('response :>> ', response)
            const { accessToken } = response.data
            auth.token = accessToken
            auth.user = decodeJWT(accessToken)
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}

export function createUserValidateToken(auth: Auth): ApiValidateToken {
    return async () => {
        try {
            const response = await apiValidateToken(auth.token)
            // console.log('response :>> ', response);
            if (response.status != 200)
                throw new Error('failed to validate access-token!')
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}
