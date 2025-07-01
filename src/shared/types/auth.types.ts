export interface ILoginRequest {
  identifier: string
}

export interface ILoginResponse {
  status: string
  message: string
  data: {
    user: {
      id: string
      login: string
      email: string
      createdAt: string
    }
    code: {
      expiresAt: string
    }
  }
}

export interface IVerifyLoginResponse {}

export interface IVerifyLogin {
  code: string
}

export interface IRegisterRequest {
  login: string
  email: string
}

export interface IRegisterResponse {
  status: string
  message: string
  data: {
    id: string
    email: string
    name: string | null
    surName: string | null
    lastName: string | null
    login: string
    createdAt: string
    isActivated: boolean
    activatedEmailCode: string
  }
}
