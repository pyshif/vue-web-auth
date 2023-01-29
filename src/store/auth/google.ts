import type { AxiosError } from '@/api'
import { resetAuth, type Auth } from './data'
import { apiGoogleSignIn, apiGoogleSignOut } from '@/api'
import decodeJWT from 'jwt-decode'

export type ApiGoogleSignIn = (googleIdToken: string) => Promise<void | Error>
export type ApiGoogleSignOut = (hint: string) => Promise<void | Error>

export function createUseGoogleSignIn(auth: Auth): ApiGoogleSignIn {
    return async (googleIdToken) => {
        try {
            const response = await apiGoogleSignIn(googleIdToken)
            // console.log('response :>> ', response);
            if (response.status != 200) throw new Error('failed to google sign in!')
            const { accessToken } = response.data
            auth.token = accessToken
            auth.user = decodeJWT(accessToken)
            return
        } catch (error) {
            return error as Error
        }
    }
}

export function createUseGoogleSignOut(auth: Auth): ApiGoogleSignOut {
    return async (hint) => {
        try {
            const response = await apiGoogleSignOut(hint)
            // console.log('response :>> ', response);
            if (response.status != 204) console.log('failed to google sign-out! (it\'s fine. system still clear user data.)');
            resetAuth(auth)
            return
        } catch (error) {
            return error as Error
        }
    }
}