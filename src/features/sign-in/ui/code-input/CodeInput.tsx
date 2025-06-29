import { Input } from "@/shared";
import React from "react";
import styles from "./styles.module.scss";

export const CodeInput = ({
  code,
  onChangeCode,
  inputsRef,
  onBackspace,
}: {
  code: string[];
  onChangeCode: (index: number, val: string) => void;
  inputsRef: React.MutableRefObject<(HTMLInputElement | null)[]>;
  onBackspace: (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => void;
}) => {
  return (
    <div className={styles["codes-inputs"]}>
      {code.map((val, index) => (
        <Input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          maxLength={1}
          type="text"
          className={styles["codes-inputs__item"]}
          value={val}
          onKeyDown={(e) => onBackspace(e, index)}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            if (value.length <= 1) {
              onChangeCode(index, value);
              if (value && index < code.length - 1) {
                inputsRef.current[index + 1]?.focus();
              }
            }
          }}
        />
      ))}
    </div>
  );
};
