// Button.tsx
import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isIconLeft?: boolean;
  isIconRight?: boolean;
  iconLeft?: React.ElementType;
  iconRight?: React.ElementType;
  typeStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost';
}

export const Button = ({
  typeStyle = 'primary',
  children,
  className = '',
  iconLeft: IconLeft,
  iconRight: IconRight,
  isIconLeft,
  isIconRight,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${styles[`${typeStyle}`]} ${className}`} {...props}>
      {isIconLeft && IconLeft && (
        <div className={styles['icon-left']}>
          <IconLeft />
        </div>
      )}

      {children}

      {isIconRight && IconRight && (
        <div className={styles['icon-right']}>
          <IconRight />
        </div>
      )}
    </button>
  );
};
