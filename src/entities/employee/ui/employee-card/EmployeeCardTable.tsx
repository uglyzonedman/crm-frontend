import React from "react";
import { IEmployee } from "../../model";
import styles from "./styles.module.scss";

export const EmployeeCardTable = ({
  employee,
}: //   detailFields,
{
  employee: IEmployee;
  //   detailFields: {
  //     key: keyof IEmployee;
  //     label: string;
  //   }[];
}) => {
  return (
    <div className={styles["card-table"]}>
      <div className={styles["card-table__profile"]}>
        <div className={styles["card-table__profile__avatar"]}>
          <span>{employee.fullname[0].toUpperCase()}</span>
        </div>
        <h3 className={styles["card-table__profile__fullname"]}>
          {employee.fullname}
        </h3>
        <p className={styles["card-table__profile__position"]}>
          {employee.position}
        </p>
      </div>
      <div className={styles["card-table__stats"]}>
        <div className={styles["card-table__stats__item"]}>
          <span>0</span>
          <p>Backlog tasks</p>
        </div>
        <div className={styles["card-table__stats__item"]}>
          <span>0</span>
          <p>Backlog tasks</p>
        </div>
        <div className={styles["card-table__stats__item"]}>
          <span>0</span>
          <p>Backlog tasks</p>
        </div>
      </div>
    </div>
  );
};
