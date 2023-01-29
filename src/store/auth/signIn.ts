import type { SignInData, SignInResponseData } from '@/api'
import type { Auth, AuthHookReturn } from './data'
import { apiSignIn } from '@/api'
import decodeJWT from 'jwt-decode'

export type ApiSignIn = (data: SignInData) => Promise<AuthHookReturn>

export function createUseSignIn(auth: Auth): ApiSignIn {
    return async (data: SignInData) => {
        try {
            const response = await apiSignIn(data)
            if (response.status != 200) throw new Error('failed to sign-in!')
            const { accessToken } =
                response.data as unknown as SignInResponseData
            // console.log('api signin response :>> ', response)
            auth.token = accessToken
            auth.user = decodeJWT(accessToken)
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}
