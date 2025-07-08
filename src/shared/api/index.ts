import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/",
  withCredentials: true,
});

let isRefreshing = false;
let queue: { resolve: Function; reject: Function }[] = [];

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest.url === "/session/update-session"
    ) {
      Cookies.remove("accessToken");
      window.location.href = "/auth/sign-in";
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          queue.push({ resolve, reject });
        }).then(() => axiosInstance(originalRequest));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await axiosInstance.put("/session/update-session");

        const { accessToken, accessTokenExpiresInMs } = res.data.data;

        Cookies.set("accessToken", accessToken, {
          expires: new Date(Date.now() + accessTokenExpiresInMs),
        });

        queue.forEach((p) => p.resolve());
        queue = [];

        return axiosInstance(originalRequest);
      } catch (err) {
        queue.forEach((p) => p.reject(err));
        queue = [];

        Cookies.remove("accessToken");
        window.location.href = "/auth/sign-in";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

