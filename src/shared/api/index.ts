import axios from 'axios'
import Cookies from 'js-cookie'
export const axiosInstance = axios.create({
	baseURL: 'http://localhost:8080/api/',
})

axiosInstance.interceptors.request.use(config => {
	const token = Cookies.get('accessToken')
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

let isRefreshing = false
let failedQueue: any[] = []

const processQueue = (error: any, token: string | null = null) => {
	failedQueue.forEach(prom => {
		if (error) {
			prom.reject(error)
		} else {
			prom.resolve(token)
		}
	})
	failedQueue = []
}

axiosInstance.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config

		if (
			error.response?.status === 401 &&
			!originalRequest._retry &&
			!originalRequest.url.includes('/auth/refresh')
		) {
			if (isRefreshing) {
				return new Promise((resolve, reject) => {
					failedQueue.push({
						resolve: (token: string) => {
							originalRequest.headers['Authorization'] = 'Bearer ' + token
							resolve(axiosInstance(originalRequest))
						},
						reject: (err: any) => reject(err),
					})
				})
			}

			originalRequest._retry = true
			isRefreshing = true

			try {
				const refreshToken = Cookies.get('refreshToken')
				if (!refreshToken) throw new Error('No refresh token')

				const response = await axios.put(
					'http://localhost:8080/api/session/update-session',
					{
						refreshToken,
					}
				)

				const newAccessToken = response.data.data.accessToken
				const newRefreshToken = response.data.data.refreshToken
				Cookies.set('accessToken', newAccessToken, {
					expires: response.data.data.accessTokenExpiresInMs,
				})
				Cookies.set('refreshToken', newRefreshToken, {
					expires: response.data.data.refreshTokenExpiresInMs,
				})

				processQueue(null, newAccessToken)

				originalRequest.headers['Authorization'] = 'Bearer ' + newAccessToken
				return axiosInstance(originalRequest)
			} catch (err) {
				processQueue(err, null)
				// Cookies.remove('accessToken')
				// Cookies.remove('refreshToken')
				// window.location.href = '/auth/sign-in'
				return Promise.reject(err)
			} finally {
				isRefreshing = false
			}
		}

		return Promise.reject(error)
	}
)
