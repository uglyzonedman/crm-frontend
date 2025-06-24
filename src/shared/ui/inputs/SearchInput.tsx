import { SearchIcon } from 'lucide-react'
import React from 'react'
import styles from './styles.module.scss'
export const SearchInput = () => {
	return (
		<div className={styles['search-input']}>
			<SearchIcon size={24} />
			<input
				type='text'
				placeholder='Поиск...'
				className={styles['search-input__field']}
			/>
		</div>
	)
}
