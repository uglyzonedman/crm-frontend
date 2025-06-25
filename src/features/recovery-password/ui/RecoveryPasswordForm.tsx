import React from "react";
import styles from "./styles.module.scss";
import { Button, Input, Label } from "@/shared";
export const RecoveryPasswordForm = () => {
  return (
    <form className={styles["recovery"]}>
      <span className={styles["recovery-step"]}>Шаг 1/4</span>
      <h3 className={styles["recovery-title"]}>Восстановления пароля</h3>
      <div className={styles["recovery-email"]}>
        <Label>Email адрес</Label>
        <Input placeholder="youremail@youremail.mail" type="email" />
        <Button className={styles["recovery-email__send"]}>
          Отправить код
        </Button>
      </div>
    </form>
  );
};
