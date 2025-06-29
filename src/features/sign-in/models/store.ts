import { create } from "zustand";
import Cookies from "js-cookie";

interface AuthState {
  isAuth: boolean;
  logout: () => void;
}

export const AuthStore = create<AuthState>((set) => ({
  isAuth: false,
  logout: () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    localStorage.removeItem("isAuth");
    set({ isAuth: false });
  },
}));
