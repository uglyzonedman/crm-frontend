import { Info } from "lucide-react";
import styles from "./styles.module.scss";

export const TimerNotice = ({
  email,
  remainingTime,
}: {
  email: string;
  remainingTime: number;
}) => (
  <div className={styles["notification"]}>
    <div className={styles["notification-extend"]}>
      <Info fill="#3F8CFF" color="#fff" />
      <p className={styles["notification-extend__description"]}>
        Код отправлен на {email}. Действителен в течение&nbsp;
        {String(Math.floor(remainingTime / 60)).padStart(2, "0")}:
        {String(remainingTime % 60).padStart(2, "0")}
      </p>
    </div>
  </div>
);
