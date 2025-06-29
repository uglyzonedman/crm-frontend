"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import logo from "@/assets/images/LogoSign.png";
import Image from "next/image";
import { Check } from "lucide-react";
export const Info = () => {
  const [currentStatusesId] = useState(2);
  const list_statuses = [
    {
      id: 1,
      label: "Верификация почты",
      isSuccess: true,
    },
    {
      id: 2,
      label: "Отправка кода",
      isSuccess: false,
    },
    {
      id: 3,
      label: "Подвтерждение кода",
      isSuccess: false,
    },
    {
      id: 4,
      label: "Смена пароля",
      isSuccess: false,
    },
  ];

  return (
    <div className={styles["info"]}>
      <Image src={logo} alt="logo" />
      <h3 className={styles["info-title"]}>Восстановление пароля</h3>
      <div className={styles["info-statuses"]}>
        {list_statuses.map((status, index) => {
          const isCurrent = currentStatusesId === status.id;
          const isCompleted = status.isSuccess;
          return (
            <div key={index} className={styles["info-statuses__item"]}>
              <div className={styles["info-statuses__item__activity"]}>
                <div
                  className={styles["info-statuses__item__activity__circle"]}
                  style={{
                    backgroundColor: isCompleted
                      ? "#fff"
                      : isCurrent
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                    border: isCurrent ? "3px solid #fff" : "3px solid #fff",
                  }}
                >
                  {isCompleted && <Check color="#3F8CFF" size={28} />}
                </div>

                {index !== list_statuses.length - 1 && (
                  <div
                    className={styles["info-statuses__item__activity__border"]}
                  ></div>
                )}
              </div>
              <div className={styles["info-statuses__item__title"]}>
                <span>{status.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
