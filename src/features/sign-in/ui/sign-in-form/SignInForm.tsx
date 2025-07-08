"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button, Input, Label } from "@/shared";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import {
  useLoginMutation,
} from "../../models";

export const SignInForm = () => {

  const [authData, setAuthData] = useState({
    identificator: '',
    password: '',
  })

  const handleChangeAuthData = (key: 'identificator' | 'password', value: string) => {
    setAuthData(prev => ({
      ...prev,
      [key]: value
    }))
  }


  const loginMutation = useLoginMutation();



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ identifier: authData.identificator, password: authData.password });
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form"]}>
      <h3 className={styles["form-title"]}>Авторизоваться в Woorkroom</h3>
      <div className={styles["form-inputs"]}>
        <div>
          <Label>Логин или почта</Label>
          <Input type="text" onChange={(e) => handleChangeAuthData('identificator', e.target.value)} placeholder="user@email.com" />
        </div>
        <div>
          <Label>Пароль</Label>
          <Input type="password" onChange={(e) => handleChangeAuthData('password', e.target.value)} placeholder="user@email.com" />
        </div>


      </div>
      <Button
        type="submit"
        iconRight={MoveRight}
        isIconRight={true}
        className={styles["form-submit"]}
      >
        Войти в аккаунт
      </Button>
      <Link className={styles["form-notaccount"]} href={"/auth/sign-up"}>
        Нет аккаунта?
      </Link>
    </form>
  );
};
