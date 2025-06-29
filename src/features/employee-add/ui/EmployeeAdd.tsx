"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import AddEmployeeModal from "./AddEmployeeModal";

export const EmployeeAdd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className={styles["add"]} onClick={() => setIsModalOpen(true)}>
        <Plus />
        Добавить сотрудника
      </button>

      <AddEmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
