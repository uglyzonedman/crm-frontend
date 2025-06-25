import { axiosInstance, IGetMeResponse } from '@/shared'

export const UserService = {
	me: async () => {
		const res = await axiosInstance.get<IGetMeResponse>('user/me')
		return res.data
	},
}
