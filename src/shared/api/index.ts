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
