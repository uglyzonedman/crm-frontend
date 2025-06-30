import { useMutation } from '@tanstack/react-query'
import { AuthService } from '@/shared'
import toast from 'react-hot-toast'

export const useRegister = () => {
  return useMutation({
    mutationFn: ({ email, login }: { email: string; login: string }) =>
      AuthService.register({ email, login }),

    onSuccess: res => {
      toast.success(res.message)
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || 'Ошибка при отправке')
    },
    onMutate: () => {
      toast.loading('Отправка кода...', { id: 'login' })
    },
  })
}
