import type { AxiosError } from '@/api'
import { isEmptyToken, type Auth } from '../auth/data'
import { apiTellMe } from '@/api'

export type ApiTellMe = (feedback: string) => Promise<void | Error | AxiosError>

export function createUseTellMe(auth: Auth): ApiTellMe {
    return async (feedback) => {
        try {
            if (isEmptyToken(auth)) throw new Error('failed to sending feedback! (invalid token)')
            const response = await apiTellMe(auth.token, feedback)
            // console.log('response :>> ', response);
            if (response.status != 200) throw new Error('failed to sending feedback!')
            return
        } catch (error) {
            return error as Error | AxiosError
        }
    }
}