import axios from 'axios'
import Cookies from 'js-cookie'

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:8080/api/',
	withCredentials: true,
})

let isRefreshing = false
let queue: any[] = []

axiosInstance.interceptors.request.use(config => {
	const token = Cookies.get('accessToken')
	if (token) config.headers.Authorization = `Bearer ${token}`
	return config
})

axiosInstance.interceptors.response.use(
	res => res,
	async error => {
		const originalRequest = error.config

		if (error.response?.status === 401 && !originalRequest._retry) {
			if (isRefreshing) {
				return new Promise(resolve => queue.push(resolve))
			}

			originalRequest._retry = true
			isRefreshing = true
			try {
				const oldrefreshToken = Cookies.get('refreshToken')
				console.log('oldrefreshToken', oldrefreshToken)
				const res = await axiosInstance.put('/session/update-session', {
					refreshToken: oldrefreshToken,
				})

				console.log('res.data', res.data)
				const accessToken = res.data.data.accessToken
				const refreshToken = res.data.data.refreshToken
				const accessTokenExpiresInMs = res.data.data.accessTokenExpiresInMs
				const refreshTokenExpiresInMs = res.data.data.refreshTokenExpiresInMs

				const accessTokenExpiresAt = new Date(accessTokenExpiresInMs)
				const refreshTokenExpiresAt = new Date(refreshTokenExpiresInMs)

				Cookies.set('accessToken', accessToken, {
					expires: accessTokenExpiresAt,
				})
				Cookies.set('refreshToken', refreshToken, {
					expires: refreshTokenExpiresAt,
				})

				queue.forEach(cb => cb(axiosInstance(originalRequest)))
				queue = []

				return axiosInstance(originalRequest)
			} catch (err) {
				Cookies.remove('accessToken')
				console.log('err', err)
				window.location.href = '/auth/sign-in'
			} finally {
				isRefreshing = false
			}
		}

		return Promise.reject(error)
	}
)
