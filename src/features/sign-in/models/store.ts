import { create } from 'zustand'
import Cookies from 'js-cookie'
import { AuthService } from '@/shared'

interface AuthState {
	isAuth: boolean
	token: string | null
	status: string | null
	login: (payload: { identifier: string; password: string }) => Promise<any>
	logout: () => void
}

export const AuthStore = create<AuthState>(set => ({
	isAuth: false,
	token: null,
	status: null,

	login: async ({ identifier, password }) => {
		const res = await AuthService.login({ identifier, password })
		const tokens = res.data.tokens

		Cookies.set('accessToken', tokens.accessToken, {
			expires: new Date(tokens.accessTokenExpiresAt),
		})
		Cookies.set('refreshToken', tokens.refreshToken, {
			expires: new Date(tokens.refreshTokenExpiresAt),
		})

		localStorage.setItem('isAuth', 'true')

		set({ isAuth: true, token: tokens.accessToken, status: res.status })

		return res
	},

	logout: () => {
		Cookies.remove('accessToken')
		Cookies.remove('refreshToken')
		localStorage.removeItem('isAuth')

		set({ isAuth: false, token: null, status: null })
	},
}))
