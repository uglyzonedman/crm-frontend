import { axiosInstance } from '../api'
import { ILoginRequest } from '../types'

export const AuthService = {
	login: async ({ identifier, password }: ILoginRequest) => {
		const res = await axiosInstance.post('auth/login', { identifier, password })
		return res.data
	},
}
