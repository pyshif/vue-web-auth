import type { Auth, AuthHookReturn } from './data'
import { apiHealth } from '@/api'

export type ApiHealth = () => Promise<AuthHookReturn>

export function createUseHealth(auth: Auth): ApiHealth {
    return async () => {
        try {
            const response = await apiHealth()
            // console.log('response :>> ', response)
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}
