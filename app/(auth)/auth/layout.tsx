"use client";
import type { ReactNode } from "react";
import "../../globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head></head>
      <body>
        <QueryClientProvider client={queryClient}>
          <main>
            {children}
            <Toaster position="bottom-right" />
          </main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
