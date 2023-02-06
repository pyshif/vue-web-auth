// import {
//     apiDeleteUser,
//     apiForgotPassword,
//     apiGoogleSignIn,
//     apiGoogleSignOut,
//     apiHealth,
//     apiRequestToken,
//     apiResetPassword,
//     apiResetPasswordByLink,
//     apiSignIn,
//     apiSignOut,
//     apiSignUp,
//     apiTellMe,
//     apiUpdateUserAvatar,
//     apiUpdateUserBirthday,
//     apiUpdateUserEmail,
//     apiUpdateUserGender,
//     apiUpdateUserName,
//     apiUpdateUserPhone,
//     apiVaildateEmailAddress,
//     apiValidateToken,
//     apiValidateUserNewEmail,
// } from '@/api'

import * as mockApi from '@/api'

import {
    store,
    useForgotPassword,
    useGoogleSignIn,
    useGoogleSignOut,
    useHealth,
    useRequestToken,
    useResetPassword,
    useResetPasswordByLink,
    useSignIn,
    useSignOut,
    useSignUp,
    useTellMe,
    useUpdateUserAvatar,
    useUpdateUserBirthday,
    useUpdateUserEmail,
    useUpdateUserGender,
    useUpdateUserName,
    useUpdateUserPhone,
    useValidateToken,
    type Auth,
} from '@/store'

import { describe, test, expect, vi, expectTypeOf } from 'vitest'

vi.mock('@/api')

describe('authentication state and composable testing', () => {
    test('auth state type', () => {
        expectTypeOf(store.auth).toEqualTypeOf<Auth>()
    })

    test('forgot password', async () => {
        vi.mocked(mockApi.apiForgotPassword)
            .mockResolvedValueOnce('' as any)
            .mockRejectedValueOnce('error call')

        const data = { email: '', passwordHint: '' }

        const firstCall = await useForgotPassword(data)
        const secondCall = await useForgotPassword(data)
        // hook should return { error, auth }
        expect(mockApi.apiForgotPassword).toBeCalledTimes(2)
        expect(firstCall.error).toBeNull()
        expect(secondCall.error).toBe('error call')
        expect(firstCall.auth).toBe(store.auth)
        expect(secondCall.auth).toBe(store.auth)
    })

    test('google sign-in hook', async () => {})

    test('google sign-out hook', async () => {})

    test('health hook', async () => {})

    test('request token hook', async () => {})

    test('reset password hook', async () => {})

    test('reset password by link hook', async () => {})

    test('sign-in hook', async () => {})

    test('sign-out hook', async () => {})

    test('sign-up hook', async () => {})

    test('update user avatar hook', async () => {})

    test('update user birthday hook', async () => {})

    test('update user gender hook', async () => {})

    test('update user name hook', async () => {})

    test('update user phone hook', async () => {})

    test('update user email hook', async () => {})

    test('validate token hook', async () => {})
})
