import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Button } from '@/shared'
import company from '@/assets/images/company.png'

export const PromoOrganization = () => {
  return (
    <div className={styles['promo-company']}>
      <div className={styles['promo-company__info']}>
        <h3 className={styles['promo-company__info__title']}>
          У вас нет организации
        </h3>
        <p className={styles['promo-company__info__description']}>
          Создав организацию, вы сможете использовать все возможности нашей CRM
          системы
        </p>
        <Button className={styles['promo-company__info__create']} type="button">
          Создать организацию
        </Button>
      </div>
      <Image className={styles['promo-image']} src={company} alt="company" />
    </div>
  )
}
