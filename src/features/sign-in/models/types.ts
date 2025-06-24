import { ILoginRequest } from '@/src/shared'

export interface AuthState {
	token: string | null
	isAuth: boolean
	login: (data: ILoginRequest) => Promise<void>
	logout: () => void
	status: string | null
}
