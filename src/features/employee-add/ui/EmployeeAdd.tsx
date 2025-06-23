import { Plus } from "lucide-react";
import React from "react";
import styles from "./styles.module.scss";

export const EmployeeAdd = () => {
  return (
    <button className={styles["add"]}>
      <Plus />
      Добавить сотрудника
    </button>
  );
};
