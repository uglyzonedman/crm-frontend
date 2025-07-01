import React from 'react'
import styles from './styles.module.scss'
import { useQuery } from '@tanstack/react-query'
import { UserService } from '@/shared'
import Link from 'next/link'
import Image from 'next/image'
export const PromoUsers = () => {
  const { data: users, isLoading: isLoadingUsers } = useQuery({
    queryKey: ['get-all-users'],
    queryFn: () => UserService.all(),
  })

  if (isLoadingUsers) {
    return <span>Loading</span>
  }

  return (
    <div className={styles['users']}>
      <div className={styles['users-header']}>
        <h3 className={styles['users-header__title']}>Пользователи</h3>
        <Link className={styles['users-header__link']} href={'/employees'}>
          Показать всех
        </Link>
      </div>
      <div className={styles['users-list']}>
        {isLoadingUsers
          ? []
          : users?.data.map(item => (
              <div className={styles['users-list__card']}>
                <div className={styles['users-list__card__avatar']}></div>
                <h3 className={styles['users-list__card__login']}>
                  {item.login}
                </h3>
                <p className={styles['users-list__card__position']}>
                  Frontend developer
                </p>
                <div className={styles['users-list__card__level']}>
                  <p>Senior</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}
