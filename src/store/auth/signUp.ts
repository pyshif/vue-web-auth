import type { SignUpData, AxiosError } from '@/api'
import type { Auth, AuthHookReturn } from './data'
import { apiSignUp } from '@/api'

export type ApiSignUp = (data: SignUpData) => Promise<AuthHookReturn>

export function createUseSignUp(auth: Auth): ApiSignUp {
    return async (data) => {
        try {
            const response = await apiSignUp(data)
            if (response.status != 200) throw new Error('failed to sign-up!')
            // console.log('response :>> ', response);
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}
