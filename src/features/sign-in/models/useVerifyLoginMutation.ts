import { useMutation } from "@tanstack/react-query";
import { AuthService, setStorageCookie } from "@/shared";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type VerifyLoginOptions = {
  code: string[];
};

export const useVerifyLoginMutation = ({ code }: VerifyLoginOptions) => {
  const { push } = useRouter();

  return useMutation({
    mutationKey: ["verify-login"],
    mutationFn: () => AuthService.verifyLogin({ code: code.join("") }),
    onMutate: () => {
      toast.loading("Проверка кода...", { id: "verify-login" });
    },
    onSuccess: (res) => {
      if (res.status === "success") {
        toast.success("Успешный вход");
        setStorageCookie({
          key: "accessToken",
          value: res.data.tokens.accessToken,
          expires: res.data.tokens.accessTokenExpiresAt,
        });

        push("/");
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
