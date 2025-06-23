import { TabSwitcher } from "@/src/features/employee-tabs/ui";
import React from "react";
import styles from "./styles.module.scss";
import { EmployeeAdd, EmployeeFilter, TabItem } from "@/src/features";
import { IEmployee } from "@/src/entities";

export const EmployeesHeader = ({
  employees,
  activeTab,
  tabs,
  setActiveTab,
}: {
  employees: IEmployee[];
  activeTab: string;
  setActiveTab: (type: string) => void;
  tabs: TabItem[];
}) => {
  return (
    <div className={styles["header"]}>
      <h3 className={styles["header-title"]}>
        Сотрудники ({employees.length})
      </h3>
      <TabSwitcher tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <div className={styles["header-actions"]}>
        <EmployeeFilter />
        <EmployeeAdd />
      </div>
    </div>
  );
};
