import type { Auth, AuthHookReturn } from './data'
import { resetAuth } from './data'
import { apiSignOut } from '@/api'

export type ApiSignOut = () => Promise<AuthHookReturn>

export function createUseSignOut(auth: Auth): ApiSignOut {
    return async () => {
        try {
            const response = await apiSignOut()
            // console.log('response :>> ', response);
            resetAuth(auth)
            return { error: null, auth }
        } catch (error) {
            return { error, auth } as AuthHookReturn
        }
    }
}
