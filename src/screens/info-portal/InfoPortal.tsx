'use client';
import React from 'react';
import styles from './styles.module.scss';
import { PromoUsers } from '@/entities';
import { PromoOrganization } from '@/widgets/info-portal';
export const InfoPortal = () => {
  return (
    <div className={styles['info']}>
      <h3 className={styles['info-title']}>Информационный портал</h3>
      <PromoOrganization />
      <PromoUsers />
    </div>
  );
};
