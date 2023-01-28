import { reactive } from 'vue'
import type { Auth } from './auth/data'

export type Store = {
    auth: Auth
}

export const store: Store = reactive({
    auth: {
        token: '',
        user: {
            name: '',
            birthday: '',
            phone: '',
            gender: '',
            avatar: '',
            email: ''
        }
    }
})