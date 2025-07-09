import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/LogoSign.png';
import { REGISTRATION_STEPS } from '@/shared';

type StatusBarProps = {
  step: number;
  setStep: (value: number) => void;
};

export const StatusBar = ({ step }: StatusBarProps) => {
  return (
    <div className={styles['status']}>
      <Image src={logo} alt="logo" width={50} height={50} />
      <h3 className={styles['status-label']}>Начало регистрации</h3>
      <div className={styles['status-info']}>
        {REGISTRATION_STEPS.map(status => {
          const isSuccess = status.id < step;
          const isActive = status.id === step;
          const isInactive = status.id > step;

          return (
            <div className={styles['status-info']} key={status.id}>
              <div
                className={`
                ${styles['status-info__block']}
                ${isSuccess ? styles['success'] : ''}
                ${isActive && !isSuccess ? styles['active'] : ''}
                ${isInactive ? styles['inactive'] : ''}
              `}
              >
                <div className={styles['status-info__block__circle']}></div>
                <p className={styles['status-info__block__label']}>{status.label}</p>
              </div>
              {REGISTRATION_STEPS.length > status.id && (
                <div className={styles['status-info__border']}>
                  <div></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
