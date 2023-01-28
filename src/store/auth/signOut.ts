import type { AxiosError } from "@/api"
import { resetAuth, type Auth } from './data'
import { apiSignOut } from '@/api'

export type ApiSignOut = () => Promise<void | AxiosError>

export function createUseSignOut(auth: Auth): ApiSignOut {
    return async () => {
        try {
            const response = await apiSignOut()
            console.log('response :>> ', response);
            resetAuth(auth)
            return
        } catch (error) {
            return error as AxiosError
        }
    }
}