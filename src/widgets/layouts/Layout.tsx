"use client";
import React from "react";
import { LayoutProps } from "./types";
import { Sidebar } from "@/src/shared";
import { MainHeader } from "../main-header";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <MainHeader />
        <div>{children}</div>
      </main>
    </div>
  );
};
