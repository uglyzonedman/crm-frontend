export interface ILoginRequest {
	identifier: string
}

export interface IVerifyLogin {
	code: string
}

export interface IVerifyLoginResponse {
	status: string
	message: string
	data: {
		user: {
			id: string
			login: string
			email: string
			createdAt: string
		}
		tokens: {
			accessToken: string
			accessTokenExpiresAt: string
			refreshToken: string
			refreshTokenExpiresAt: string
		}
	}
}
