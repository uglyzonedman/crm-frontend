'use client';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import styles from './styles.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ type = 'text', ...rest }: InputProps) => {
  const isPassword = type === 'password';
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={styles.input}>
      <input type={inputType} {...rest} />
      {isPassword && (
        <span onClick={() => setShowPassword(prev => !prev)}>
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      )}
    </div>
  );
};
