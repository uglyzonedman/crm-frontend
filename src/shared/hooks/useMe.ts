import { useQuery } from '@tanstack/react-query'
import { UserService } from '../services'

export const useMe = () => {
	return useQuery({
		queryKey: ['me'],
		queryFn: UserService.me,
	})
}
