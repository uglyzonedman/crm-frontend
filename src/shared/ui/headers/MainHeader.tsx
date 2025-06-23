import React from 'react'
import { SearchInput } from '../inputs'
import { Bell, ChevronDown } from 'lucide-react'
import styles from './styles.module.scss'

export const MainHeader = () => {
	return (
		<div className={styles['main-header']}>
			<SearchInput />
			<div className={styles['main-header__notification']}>
				<button className={styles['main-header__notification__btn']}>
					<Bell size={24} />
				</button>

				<div className={styles['main-header__profile']}>
					<div className={styles['main-header__profile__nophoto']}></div>
					<p className={styles['main-header__profile__title']}>Evan Yates</p>
					<ChevronDown />
				</div>
			</div>
		</div>
	)
}
