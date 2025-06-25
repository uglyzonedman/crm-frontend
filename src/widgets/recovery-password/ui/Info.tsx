import React from 'react'
import styles from './styles.module.scss'
import logo from '@/assets/images/LogoSign.png'
import Image from 'next/image'
export const Info = () => {
	return (
		<div className={styles['info']}>
			<Image src={logo} alt='logo' />
			<h3 className={styles['info-title']}>Восстановление пароля</h3>
			<div className={styles['info-statuses']}>
				<div className={styles['info-statuses__item']}>
					<div className={styles['info-statuses__item__circle']}></div>
					<span className={styles['info-statuses__item__title']}>
						Valid your phone
					</span>
				</div>
				<div className={styles['info-statuses__item__border']}></div>
			</div>
		</div>
	)
}
