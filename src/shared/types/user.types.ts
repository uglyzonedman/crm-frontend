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

export interface IGetAllResponse {
  status: string
  message: string
  data: IUser[]
}

export interface IUser {
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
