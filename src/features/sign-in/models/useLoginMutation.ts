import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/shared";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const useLoginMutation = () => {
  const { push } = useRouter()
  return useMutation({
    mutationKey: ["login"],
    mutationFn: ({ identifier, password }: { identifier: string, password: string }) =>
      AuthService.login({ identifier, password }),
    onMutate: () => {
      toast.loading("Отправка кода...", { id: "login" });
    },
    onSuccess: (res) => {
      toast.success("Код отправлен на почту", { id: "login" });
      Cookies.set('accessToken', res.data.tokens.accessToken, {
        expires: new Date(Date.now() + res.data.tokens.accessTokenExpiresInMs), secure: true, sameSite: 'Strict',
      })
      push('/')
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Ошибка при отправке", {
        id: "login",
      });
    },
  });
};
