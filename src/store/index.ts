import type {
    Auth,
    ApiForgotPassword,
    ApiGoogleSignIn,
    ApiGoogleSignOut,
    ApiHealth,
    ApiRequestToken,
    ApiResetPassword,
    ApiResetPasswordByLink,
    ApiSignIn,
    ApiSignOut,
    ApiSignUp,
    ApiUpdateUserAvatar,
    ApiUpdateUserBirthday,
    ApiUpdateUserEmail,
    ApiUpdateUserGender,
    ApiUpdateUserName,
    ApiUpdateUserPhone,
    ApiValidateToken,
} from './auth'
import type { ApiTellMe } from './help'

import {
    initialState as authInitialState,
    createUseForgotPassword,
    createUseGoogleSignIn,
    createUseGoogleSignOut,
    createUseHealth,
    createUseRequestToken,
    createUseResetPassword,
    createUseResetPasswordByLink,
    createUseSignIn,
    createUseSignOut,
    createUseSignUp,
    createUseUpdateUserAvatar,
    createUseUpdateUserBirthday,
    createUseUpdateUserGender,
    createUseUpdateUserName,
    createUseUpdateUserPhone,
    createUseUpdateUserEmail,
    createUseValidateToken,
} from './auth'
import { createUseTellMe } from './help'

// implementation
import { reactive } from 'vue'

export type Store = {
    auth: Auth
}

export const store: Store = reactive({
    auth: { ...authInitialState },
})

export const useForgotPassword = createUseForgotPassword(store.auth)
export const useGoogleSignIn = createUseGoogleSignIn(store.auth)
export const useGoogleSignOut = createUseGoogleSignOut(store.auth)
export const useHealth = createUseHealth(store.auth)
export const useRequestToken = createUseRequestToken(store.auth)
export const useResetPassword = createUseResetPassword(store.auth)
export const useResetPasswordByLink = createUseResetPasswordByLink(store.auth)
export const useSignIn = createUseSignIn(store.auth)
export const useSignOut = createUseSignOut(store.auth)
export const useSignUp = createUseSignUp(store.auth)
export const useUpdateUserAvatar = createUseUpdateUserAvatar(store.auth)
export const useUpdateUserBirthday = createUseUpdateUserBirthday(store.auth)
export const useUpdateUserGender = createUseUpdateUserGender(store.auth)
export const useUpdateUserName = createUseUpdateUserName(store.auth)
export const useUpdateUserPhone = createUseUpdateUserPhone(store.auth)
export const useUpdateUserEmail = createUseUpdateUserEmail(store.auth)
export const useValidateToken = createUseValidateToken(store.auth)
export const useTellMe = createUseTellMe(store.auth)
