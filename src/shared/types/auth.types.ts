export interface ILoginRequest {
	identifier: string
	password: string
}

export interface ILoginResponse {
	"status": string,
	"message": string,
	"data": {
		"user": {
			"id": string,
			"login": string,
			"email": string,
			"createdAt": string
		},
		"tokens": {
			"accessToken": string,
			"refreshToken": string,
			"accessTokenExpiresInMs": number,
			"refreshTokenExpiresInMs": number
		},
		"session": {
			"status": string,
			"message": string,
			"data": {
				"id": string,
				"refreshToken": string,
				"userId": string,
				"ip": string,
				"userAgent": string,
				"createdAt": string,
				"expiresAt": string,
				"isRevoked": false
			}
		}
	}
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
