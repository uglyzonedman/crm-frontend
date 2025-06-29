import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/shared";
import toast from "react-hot-toast";

type VerifyLoginOptions = {
  code: string[];
  onSuccess: (res: any) => void;
};

export const useVerifyLoginMutation = ({
  code,
  onSuccess,
}: VerifyLoginOptions) => {
  return useMutation({
    mutationKey: ["verify-login"],
    mutationFn: () => AuthService.verifyLogin({ code: code.join("") }),
    onMutate: () => {
      toast.loading("Проверка кода...", { id: "verify-login" });
    },
    onSuccess: (res) => {
      if (res.status === "success") {
        onSuccess(res);
      } else {
        toast.error("Неверный код", { id: "verify-login" });
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || "Ошибка верификации", {
        id: "verify-login",
      });
    },
  });
};
