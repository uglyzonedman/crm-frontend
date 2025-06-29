"use client";
import { Input, Label } from "@/shared";
import styles from "./styles.module.scss";

export const EmailInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) => (
  <div className={styles["input"]}>
    <Label className={styles["input-label"]}>Email адрес</Label>
    <Input
      placeholder="email"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
