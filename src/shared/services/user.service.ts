import { axiosInstance, IGetMeResponse } from '@/shared'
import { IGetAllResponse } from '../types/user.types'

export const UserService = {
  me: async () => {
    const res = await axiosInstance.get<IGetMeResponse>('user/me')
    return res.data
  },
  all: async () => {
    const res = await axiosInstance.get<IGetAllResponse>('user/all')
    return res.data
  },
}
