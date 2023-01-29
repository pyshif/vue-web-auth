import type { AxiosError, ForgotData, ResetPasswordByLinkData } from '@/api'
import type { Auth, AuthHookReturn } from './data'
import { apiForgotPassword, apiResetPasswordByLink } from '@/api'

export type ApiForgotPassword = (data: ForgotData) => Promise<AuthHookReturn>
export type ApiResetPasswordByLink = (
    linkToken: string,
    data: ResetPasswordByLinkData
) => Promise<AuthHookReturn>

export function createUseForgotPassword(auth: Auth): ApiForgotPassword {
    return async (data) => {
        try {
            const response = await apiForgotPassword(data)
            // console.log('response :>> ', response);
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}

export function createUseResetPasswordByLink(
    auth: Auth
): ApiResetPasswordByLink {
    return async (linkToken, data) => {
        try {
            const response = await apiResetPasswordByLink(linkToken, data)
            // console.log('response :>> ', response)
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}
