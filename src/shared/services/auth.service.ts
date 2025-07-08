import { axiosInstance } from '../api'
import { ILoginRequest, IVerifyLogin } from '../types'
import { ILoginResponse, IVerifyLoginResponse } from '../types/auth.types'

export const AuthService = {
	login: async ({ identifier, password }: ILoginRequest) => {
		const res = await axiosInstance.post<ILoginResponse>('auth/login', {
			identifier,
			password
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
