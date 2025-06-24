import React from 'react'
import styles from './styles.module.scss'
import logo from '@/src/assets/images/LogoSign.png'
import Image from 'next/image'
import welcome from '@/src/assets/images/signinphoto.png'
export const Welcome = () => {
	return (
		<div className={styles['welcome']}>
			<div className={styles['welcome-logo']}>
				<Image src={logo} alt='logo-sign' />
				<h3 className={styles['welcome-logo__title']}>Woorkroom</h3>
			</div>
			<p className={styles['welcome-desc']}>
				Ваше место для планировки Вашей работы. Создайвайте, контролируйте
			</p>
			<Image src={welcome} alt='welcome' />
		</div>
	)
}
