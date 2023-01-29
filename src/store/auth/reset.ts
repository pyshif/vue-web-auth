import type { ResetPasswordData } from '@/api'
import type { Auth, AuthHookReturn } from './data'
import { isEmptyToken } from './data'
import { apiResetPassword } from '@/api'

export type ApiResetPassword = (
    data: ResetPasswordData
) => Promise<AuthHookReturn>

export function createUseResetPassword(auth: Auth): ApiResetPassword {
    return async (data) => {
        try {
            if (isEmptyToken(auth))
                throw new Error('failed to reset password! (invalid token)')
            const response = await apiResetPassword(auth.token, data)
            // console.log('response :>> ', response);
            if (response.status != 200)
                throw new Error('failed to reset password!')
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}
