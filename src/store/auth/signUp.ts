import type { SignUpData, AxiosError } from '@/api'
import type { Auth } from './data'
import { apiSignUp } from '@/api'

export type ApiSignUp = (data: SignUpData) => Promise<void | AxiosError>

export function createUseSignUp(auth: Auth): ApiSignUp {
    return async (data) => {
        try {
            const response = await apiSignUp(data);
            // console.log('response :>> ', response);
            return
        } catch (error) {
            return error as AxiosError
        }
    }
}