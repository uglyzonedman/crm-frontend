"use client";

// import { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import { usePathname, useRouter } from "next/navigation";

// const publicRoutes = ["/auth/sign-in", "/auth/sign-up"];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();
  // const pathname = usePathname();
  // const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   if (publicRoutes.includes(pathname)) {
  //     setChecked(true);
  //     return;
  //   }

  //   const accessToken = Cookies.get("accessToken");
  //   if (!accessToken) {
  //     console.log("pedoras");
  //     // router.replace("/auth/sign-in");
  //   } else {
  //     setChecked(true);
  //   }
  // }, [pathname, router]);

  return <>{children}</>;
};
