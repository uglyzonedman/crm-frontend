import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";
import styles from "./styles.module.scss";

export const EmployeePagination = () => {
  return (
    <div className={styles["employees-footer"]}>
      <div className={styles["employees-footer__pagination"]}>
        <span className={styles["employees-footer__pagination__count"]}>
          1-8 из 28
        </span>
        <div className={styles["employees-footer__pagination__arrows"]}>
          <button
            className={styles["employees-footer__pagination__arrows__item"]}
          >
            <MoveLeft />
          </button>
          <button
            className={styles["employees-footer__pagination__arrows__item"]}
          >
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};
