import { create } from 'zustand'
import { AuthState } from './types'
import { AuthService } from '@/src/shared'
import Cookies from 'js-cookie'
export const AuthStore = create<AuthState>(set => ({
	isAuth: false,
	token: null,
	status: null,
	logout: () => {
		Cookies.remove('accessToken')
		Cookies.remove('refreshToken')
		localStorage.removeItem('isAuth')
		set({
			isAuth: false,
			token: null,
			status: null,
		})
	},
	login: async ({ identifier, password }) => {
		const data = await AuthService.login({ identifier, password })
		const tokens = data.data.tokens
		Cookies.set('accessToken', tokens.accessToken, {
			expires: new Date(tokens.accessTokenExpiresAt),
		})
		Cookies.set('refreshToken', tokens.accessToken, {
			expires: new Date(tokens.refreshTokenExpiresAt),
		})
		localStorage.setItem('isAuth', 'true')
		set({ isAuth: true, token: tokens.accessToken, status: data.status })
		return data
	},
}))
