import { resetAuth, type Auth, type AuthHookReturn } from './data'
import { apiGoogleSignIn, apiGoogleSignOut } from '@/api'
import decodeJWT from 'jwt-decode'

export type ApiGoogleSignIn = (googleIdToken: string) => Promise<AuthHookReturn>
export type ApiGoogleSignOut = (hint: string) => Promise<AuthHookReturn>

export function createUseGoogleSignIn(auth: Auth): ApiGoogleSignIn {
    return async (googleIdToken) => {
        try {
            const response = await apiGoogleSignIn(googleIdToken)
            // console.log('response :>> ', response);
            if (response.status != 200)
                throw new Error('failed to google sign in!')
            const { accessToken } = response.data
            auth.token = accessToken
            auth.user = decodeJWT(accessToken)
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}

export function createUseGoogleSignOut(auth: Auth): ApiGoogleSignOut {
    return async (hint) => {
        try {
            const response = await apiGoogleSignOut(hint)
            // console.log('response :>> ', response);
            if (response.status != 204)
                console.log(
                    "failed to google sign-out! (it's fine. system still clear user data.)"
                )
            resetAuth(auth)
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}
