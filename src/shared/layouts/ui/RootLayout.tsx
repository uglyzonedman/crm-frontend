"use client";
import React from "react";
import { MainHeader, Sidebar } from "@/shared";
import styles from "./styles.module.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/providers/AuthProvider";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className={styles["root-wrapper"]}>
          <Sidebar />
          <main className={styles["root-main"]}>
            <MainHeader />
            <div>{children}</div>
          </main>
        </div>
        <Toaster position="bottom-right" />
      </QueryClientProvider>
    </AuthProvider>
  );
};
