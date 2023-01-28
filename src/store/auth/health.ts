import type { AxiosError } from '@/api'
import { apiHealth } from '@/api'


export type ApiHealth = () => Promise<void | AxiosError>

export function createUseHealth(): ApiHealth {
    return async () => {
        try {
            const response = await apiHealth()
            // console.log('response :>> ', response)
            return
        } catch (error) {
            return error as AxiosError
        }
    }
}