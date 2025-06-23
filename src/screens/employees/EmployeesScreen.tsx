"use client";
import React, { useState } from "react";
import { EmployeeCard } from "@/src/entities";
import { EmployeesHeader } from "@/src/widgets";
import { employeesList } from "@/src/shared/consts/employees_list";
import { EmployeePagination } from "@/src/features";
import styles from "./styles.module.scss";
export const EmployeesScreen = () => {
  const [activeTab, setActiveTab] = useState("list");
  const tabs = [
    { id: 1, label: "Список", type: "list" },
    { id: 2, label: "Таблица", type: "table" },
  ];

  return (
    <div>
      <EmployeesHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        employees={employeesList}
        tabs={tabs}
      />
      <div className={activeTab === "table" ? styles["table"] : styles["list"]}>
        {employeesList.map((emp) => (
          <EmployeeCard activeTab={activeTab} key={emp.id} employee={emp} />
        ))}
      </div>

      <EmployeePagination />
    </div>
  );
};
