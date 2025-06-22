import React from "react";
import styles from "./styles.module.scss";
import avatar from "../../assets/images/Logo.png";
import Image from "next/image";
import { EllipsisVertical, Funnel, Plus } from "lucide-react";

export const EmployeesScreen = () => {
  return (
    <div className={styles["employees"]}>
      <div className={styles["employees-header"]}>
        <h1>Employees</h1>
        <div className={styles["header-tabs"]}>
          <button className={styles["tab-button_left"]}>List</button>
          <button className={styles["tab-button_right"]}>Activity</button>
        </div>

        <div className={styles["header-actions"]}>
          <button className={styles["icon-button"]}>
            <Funnel />
          </button>
          <button className={styles["add-button"]}>
            <Plus />
            Add Employee
          </button>
        </div>
      </div>
      <div className={styles["employees-info"]}>
        <div className={styles["employee-personal"]}>
          <Image
            src={avatar}
            alt="Avatar"
            className={styles["employees-avatar"]}
          />
          <div className={styles["employee-text"]}>
            <h1>Evan Yates</h1>
            <p>evanyates@gmail.com</p>
          </div>
        </div>
        <div className={styles["employee-detail"]}>
          <span>Gender</span>
          <p>Male</p>
        </div>
        <div className={styles["employee-detail"]}>
          <span>Birthday</span>
          <p>Apr 12, 1995</p>
        </div>
        <div className={styles["employee-detail"]}>
          <span>Full age</span>
          <p>25</p>
        </div>
        <div className={styles["employee-detail"]}>
          <span>Position</span>
          <p>UI/UX Designer</p>
        </div>
        <button className={styles["more-button"]}>
          <EllipsisVertical />
        </button>
      </div>
    </div>
  );
};
