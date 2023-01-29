import type { AxiosError, ForgotData, ResetPasswordByLinkData } from '@/api'
import type { Auth } from './data'
import { apiForgotPassword, apiResetPasswordByLink } from '@/api'

export type ApiForgotPassword = (data: ForgotData) => Promise<void | AxiosError>
export type ApiResetPasswordByLink = (linkToken: string, data: ResetPasswordByLinkData) => Promise<void | AxiosError>

export function createUseForgotPassword(auth: Auth): ApiForgotPassword {
    return async (data) => {
        try {
            const response = await apiForgotPassword(data)
            // console.log('response :>> ', response);
            return
        } catch (error) {
            return error as AxiosError
        }
    }
}

export function createUseResetPasswordByLink(auth: Auth): ApiResetPasswordByLink {
    return async (linkToken, data) => {
        try {
            const response = await apiResetPasswordByLink(linkToken, data)
            console.log('response :>> ', response);
            return
        } catch (error) {
            return error as AxiosError
        }
    }
}

