
import axios from 'axios'
import * as Forgot from './auth/forgot'
import * as GSI from './auth/gsi'
import * as Health from './auth/health'
import * as Reset from './auth/reset'
import * as SignIn from './auth/signin'
import * as SignOut from './auth/signout'
import * as SignUp from './auth/signup'
import * as Token from './auth/token'
import * as User from './auth/user'
import * as TellMe from './help/tellme'

export type { ForgotData, ResetPasswordByLinkData } from './auth/forgot'
export type { GoogleResponseData } from './auth/gsi'
export type { ResetPasswordData } from './auth/reset'
export type { SignInData, SignInResponseData } from './auth/signin'
export type { SignUpData } from './auth/signup'
export type { RequestTokenResponseData } from './auth/token'
export type { UpdateUserAvatarData } from './auth/user'

const instance = axios.create({
    baseURL: import.meta.env.API_URL || 'http://localhost:3003/'
});

export const apiForgotPassword = Forgot.ForgotPassword(instance);
export const apiResetPasswordByLink = Forgot.ResetPasswordByLink(instance);
export const apiGoogleSignIn = GSI.GoogleSignIn(instance)
export const apiGoogleSignOut = GSI.GoogleSignOut(instance)
export const apiHealth = Health.Health(instance)
export const apiResetPassword = Reset.ResetPassword(instance)
export const apiSignIn = SignIn.SignIn(instance)
export const apiSignOut = SignOut.SignOut(instance)
export const apiSignUp = SignUp.SignUp(instance)
export const apiVaildateEmailAddress = SignUp.ValidateEmailAddress(instance)
export const apiValidateToken = Token.ValidateToken(instance)
export const apiRequestToken = Token.RequestToken(instance)
export const apiDeleteUser = User.DeleteUser(instance);
export const apiUpdateUserAvatar = User.UpdateUserAvatar(instance)
export const apiUpdateUserBirthday = User.UpdateUserBirthday(instance)
export const apiUpdateUserEmail = User.UpdateUserEmail(instance)
export const apiUpdateUserGender = User.UpdateUserGender(instance)
export const apiUpdateUserName = User.UpdateUserName(instance)
export const apiUpdateUserPhone = User.UpdateUserPhone(instance)
export const apiValidateUserNewEmail = User.ValidateUserNewEmail(instance)
export const apiTellMe = TellMe.TellMe(instance)
