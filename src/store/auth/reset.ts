import type { AxiosError, ResetPasswordData } from '@/api'
import type { Auth } from './data'
import { apiResetPassword } from '@/api'

export type ApiResetPassword = (data: ResetPasswordData) => Promise<void | Error>

export function createUseResetPassword(auth: Auth): ApiResetPassword {
    return async (data) => {
        try {
            const response = await apiResetPassword(auth.token, data)
            // console.log('response :>> ', response);
            if (response.status != 200) throw new Error('failed to reset password!')
            return
        } catch (error) {
            return error as Error
        }
    }
}