export interface IGetMeResponse {
	status: string
	message: string
	data: {
		activatedEmailCode: string
		createdAt: string
		email: string
		id: string
		isActivated: boolean
		lastName: string
		login: string
		name: string
		surName: string
	}
}
