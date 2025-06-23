import React from "react";
import { IEmployee } from "../../model";
import { EmployeeCardList } from "./EmployeeCardList";
import { EmployeeCardTable } from "./EmployeeCardTable";

interface Props {
  employee: IEmployee;
  activeTab: string;
}

const detailFields: { key: keyof IEmployee; label: string }[] = [
  { key: "gender", label: "Пол" },
  { key: "birthday", label: "Дата рождения" },
  { key: "fullAge", label: "Полный возраст" },
  { key: "position", label: "Должность" },
];

export const EmployeeCard = ({ employee, activeTab }: Props) => {
  const renderActiveTab = (activeTab: string) => {
    switch (activeTab) {
      case "list":
        return (
          <EmployeeCardList detailFields={detailFields} employee={employee} />
        );

      case "table":
        return <EmployeeCardTable employee={employee} />;

      default:
        break;
    }
  };
  return renderActiveTab(activeTab);
};
