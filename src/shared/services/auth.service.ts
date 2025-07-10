import { axiosInstance } from '../api';
import { ILoginRequest, IVerifyLogin } from '../types';
import {
  ILoginResponse,
  ISendCodeRequest,
  ISendCodeResponse,
  IVerifyAccountRequest,
  IVerifyAccountResponse,
  IVerifyLoginResponse,
} from '../types/auth.types';

export const AuthService = {
  login: async ({ identifier, password }: ILoginRequest) => {
    const res = await axiosInstance.post<ILoginResponse>('auth/login', {
      identifier,
      password,
    });
    return res.data;
  },
  verifyLogin: async ({ code }: IVerifyLogin) => {
    const res = await axiosInstance.post<IVerifyLoginResponse>(`auth/verify-login/${code}`);
    return res.data;
  },
  sendCode: async ({ email }: ISendCodeRequest) => {
    const res = await axiosInstance.post<ISendCodeResponse>('auth/send-code', {
      email,
    });

    return res.data;
  },
  verifyAccount: async ({ code }: IVerifyAccountRequest) => {
    const res = await axiosInstance.put<IVerifyAccountResponse>(`auth/veify-account/${code}`);
    return res.data;
  },
};
