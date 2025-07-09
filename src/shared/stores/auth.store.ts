// store/authStore.ts
import { create } from 'zustand'
import Cookies from 'js-cookie'
import { axiosInstance } from '../api'

type AuthState = {
	isAuthenticated: boolean
	user: any
	loading: boolean
	checkAuth: () => Promise<void>
	logout: () => void
}

export const useAuthStore = create<AuthState>(set => ({
	isAuthenticated: false,
	user: null,
	loading: true,

	checkAuth: async () => {
		const accessToken = Cookies.get('accessToken')
		const refreshToken = Cookies.get('refreshToken')

		// Если accessToken отсутствует, но есть refreshToken → пытаемся обновить
		if (!accessToken && refreshToken) {
			try {
				const res = await axiosInstance.put('/session/update-session', {
					refreshToken,
				})

				const {
					accessToken: newAccessToken,
					refreshToken: newRefreshToken,
					accessTokenExpiresInMs,
					refreshTokenExpiresInMs,
				} = res.data.data

				Cookies.set('accessToken', newAccessToken, {
					expires: new Date(Date.now() + accessTokenExpiresInMs),
				})
				Cookies.set('refreshToken', newRefreshToken, {
					expires: new Date(Date.now() + refreshTokenExpiresInMs),
				})

				set({
					isAuthenticated: true,
					user: res.data.data.user || null,
					loading: false,
				})
			} catch (error) {
				Cookies.remove('accessToken')
				Cookies.remove('refreshToken')
				set({ isAuthenticated: false, user: null, loading: false })
			}
		} else if (accessToken) {
			// accessToken есть — считаем пользователя авторизованным
			set({ isAuthenticated: true, user: null, loading: false })
		} else {
			set({ isAuthenticated: false, user: null, loading: false })
		}
	},

	logout: () => {
		Cookies.remove('accessToken')
		Cookies.remove('refreshToken')
		set({ isAuthenticated: false, user: null, loading: false })
	},
}))
