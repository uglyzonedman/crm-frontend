import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/shared";
import toast from "react-hot-toast";

export const useLoginMutation = (onSuccessCallback: () => void) => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: ({ identifier }: { identifier: string }) =>
      AuthService.login({ identifier }),
    onMutate: () => {
      toast.loading("Отправка кода...", { id: "login" });
    },
    onSuccess: () => {
      toast.success("Код отправлен на почту", { id: "login" });
      onSuccessCallback();
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Ошибка при отправке", {
        id: "login",
      });
    },
  });
};
