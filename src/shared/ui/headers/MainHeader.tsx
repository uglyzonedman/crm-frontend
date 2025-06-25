import React from 'react'
import { SearchInput } from '../inputs'
import { Bell, ChevronDown } from 'lucide-react'
import styles from './styles.module.scss'
import { useMe } from '../../hooks'

export const MainHeader = () => {
	const { data: me, isLoading: isLoadingMe, isError: isErrorMe } = useMe()
	console.log('me')
	const userInfo = me?.data
	return (
		<div className={styles['main-header']}>
			<SearchInput />
			<div className={styles['main-header__notification']}>
				<button className={styles['main-header__notification__btn']}>
					<Bell size={24} />
				</button>

				<div className={styles['main-header__profile']}>
					<div className={styles['main-header__profile__nophoto']}>
						{userInfo?.login[0].toUpperCase()}
					</div>
					<p className={styles['main-header__profile__title']}>
						{userInfo?.login.toUpperCase()}
					</p>
					<ChevronDown />
				</div>
			</div>
		</div>
	)
}
