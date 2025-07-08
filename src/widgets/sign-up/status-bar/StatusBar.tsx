import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/LogoSign.png';

export const StatusBar = () => {
  const statuses = [
    {
      id: 1,
      label: 'Валидация почты',
      isSuccess: true,
      isActive: false,
    },
    {
      id: 2,
      label: 'Информация о себе',
      isSuccess: false,
      isActive: true,
    },
    {
      id: 3,
      label: 'Интеграции',
      isSuccess: false,
      isActive: false,
    },
  ];

  return (
    <div className={styles['status']}>
      <Image src={logo} alt="logo" width={50} height={50} />
      <h3 className={styles['status-label']}>Начало регистрации</h3>
      <div className={styles['status-info']}>
        {statuses.map((status, index) => {
          const isSuccess = status.isSuccess;
          const isActive = status.isActive;
          const isInactive = !isSuccess && !isActive;

          return (
            <div className={styles['status-info']} key={index}>
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
              {statuses.length - 1 > index && (
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
