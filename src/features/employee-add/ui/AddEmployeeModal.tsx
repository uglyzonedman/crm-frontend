import React from "react";
import styles from "./styles.module.scss";
import { X } from "lucide-react";
import Image from "next/image";
import illustration from "@/assets/images/illustration.png";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddEmployeeModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles["add-employee-overlay"]}>
      <div className={styles["add-employee-modal"]}>
        <button
          className={styles["add-employee-modal__close"]}
          onClick={onClose}
        >
          <X />
        </button>

        <h2 className={styles["add-employee-modal__title"]}>Add Employee</h2>

        <div className={styles["add-employee-modal__image"]}>
          <Image src={illustration} alt="illustration" />
        </div>

        <div className={styles["add-employee-modal__inputs"]}>
          <p className={styles["add-employee-modal__inputs__text"]}>
            Member's Email
          </p>
          <input type="email" placeholder="memberemail@gmail.com" />
          <button className={styles["add-employee-modal__inputs__another"]}>
            + Add another member
          </button>
        </div>

        <div className={styles["add-employee-modal__actions"]}>
          <button className={styles["add-employee-modal__approve"]}>
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
