import React from "react";
import styles from "./styles.module.scss";
import { Funnel } from "lucide-react";
export const EmployeeFilter = () => {
  return (
    <button className={styles["filter"]}>
      <Funnel />
    </button>
  );
};
