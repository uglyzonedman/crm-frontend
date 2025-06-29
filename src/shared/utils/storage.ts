import Cookies from "js-cookie";

interface PropsSetStorageLocal {
  key: string;
  value: string;
}

interface PropsSetStorageCookies {
  value: string;
  key: string;
  expires?: Date | string | number;
}

export const setStorageCookie = ({
  key,
  value,
  expires,
}: PropsSetStorageCookies): void => {
  try {
    if (typeof expires === "number") {
      Cookies.set(key, value, { expires }); // число дней
    } else if (typeof expires === "string") {
      const date = new Date(expires);
      if (!isNaN(date.getTime())) {
        Cookies.set(key, value, { expires: date });
      } else {
        console.warn("Невалидная дата:", expires);
        Cookies.set(key, value);
      }
    } else if (expires instanceof Date) {
      if (!isNaN(expires.getTime())) {
        Cookies.set(key, value, { expires });
      } else {
        console.warn("Невалидный объект Date:", expires);
        Cookies.set(key, value);
      }
    } else {
      Cookies.set(key, value);
    }
  } catch (err) {
    console.error("Ошибка при установке куки:", err);
  }
};

export const getStorageCookie = (key: string): string | undefined => {
  return Cookies.get(key);
};

export const setStorageLocal = ({ key, value }: PropsSetStorageLocal): void => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error("Ошибка при установке localStorage:", error);
  }
};

export const getStorageLocal = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error("Ошибка при получении из localStorage:", error);
    return null;
  }
};
