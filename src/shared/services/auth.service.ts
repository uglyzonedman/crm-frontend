import { axiosInstance } from '../api'
import { ILoginRequest, IVerifyLogin } from '../types'
import { IVerifyLoginResponse } from '../types/auth.types'

export const AuthService = {
	login: async ({ identifier }: ILoginRequest) => {
		const res = await axiosInstance.post('auth/login', {
			identifier,
		})
		return res.data
	},
	verifyLogin: async ({ code }: IVerifyLogin) => {
		const res = await axiosInstance.post<IVerifyLoginResponse>(
			`auth/verify-login/${code}`
		)
		return res.data
	},
}
