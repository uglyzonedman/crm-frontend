'use client'
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Button } from '@/shared'
import { PromoOrganization } from '@/widgets'
import { PromoUsers } from '@/entities'
export const InfoPortal = () => {
  return (
    <div className={styles['info']}>
      <h3 className={styles['info-title']}>Информационный портал</h3>
      <PromoOrganization />
      <PromoUsers />
    </div>
  )
}
