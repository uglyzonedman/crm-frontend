import React from "react";
import styles from "./styles.module.scss";
import { IEmployee } from "../../model";
import { EllipsisVertical } from "lucide-react";

export const EmployeeCardList = ({
  employee,
  detailFields,
}: {
  employee: IEmployee;
  detailFields: {
    key: keyof IEmployee;
    label: string;
  }[];
}) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-personal"]}>
        <div className={styles["card-personal__avatar"]}>
          <span>{employee.fullname[0]}</span>
        </div>
        <div className={styles["card-personal__info"]}>
          <span>{employee.fullname}</span>
          <p>{employee.email}</p>
        </div>
      </div>

      {detailFields.map((field) => (
        <div key={field.key} className={styles["card-personal__detail"]}>
          <span>{field.label}</span>
          <p>{employee[field.key] ?? "—"}</p>
        </div>
      ))}

      <button
        className={styles["card-personal__more"]}
        aria-label="Дополнительно"
      >
        <EllipsisVertical />
      </button>
    </div>
  );
};
