import { axiosInstance } from '../api'
import { ILoginRequest, IVerifyLogin } from '../types'
import {
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
} from '../types/auth.types'

export const AuthService = {
  login: async ({ identifier }: ILoginRequest) => {
    const res = await axiosInstance.post<ILoginResponse>('auth/login', {
      identifier,
    })
    return res.data
  },
  verifyLogin: async ({ code }: IVerifyLogin) => {
    const res = await axiosInstance.post(`auth/verify-login/${code}`)
    return res.data
  },
  register: async ({ email, login }: IRegisterRequest) => {
    const res = await axiosInstance.post<IRegisterResponse>('auth/register', {
      email,
      login,
    })

    return res.data
  },
}
