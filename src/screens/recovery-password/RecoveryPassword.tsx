"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Info } from "@/widgets";
import { RecoveryPasswordForm } from "@/features";
export const RecoveryPasswordScreen = () => {
  return (
    <div className={styles["recovery"]}>
      <Info />
      <RecoveryPasswordForm />
    </div>
  );
};
