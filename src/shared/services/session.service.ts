import { axiosInstance } from '../api'

export interface IAddSessionRequest {
	refreshToken: string
	expiresAt: Date
	userId: string
}

export const SessionService = {
	addSession: async ({
		refreshToken,
		expiresAt,
		userId,
	}: IAddSessionRequest) => {
		const res = await axiosInstance.post('session/add-session', {
			refreshToken,
			expiresAt,
			userId,
		})

		return res.data
	},
}
