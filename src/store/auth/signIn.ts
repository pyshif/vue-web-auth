import type { SignInData, SignInResponseData } from "@/api"
import type { Auth } from './data'
import type { AxiosError } from '@/api'
import { apiSignIn } from "@/api"
import decodeJWT from 'jwt-decode'

export type ApiSignIn = (data: SignInData) => Promise<Auth | AxiosError>

export function createUseSignIn(auth: Auth): ApiSignIn {
    return async (data: SignInData) => {
        try {
            const response = await apiSignIn(data)
            const { accessToken } = response.data as unknown as SignInResponseData
            // console.log('api signin response :>> ', response);
            auth.token = accessToken
            auth.user = decodeJWT(accessToken)
            return auth
        } catch (error) {
            return error as AxiosError
        }
    }
}
