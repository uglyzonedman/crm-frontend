import React from 'react'
import { TabSwitcherProps } from '../model'
import styles from './styles.module.scss'
export const TabSwitcher = ({
	tabs,
	activeTab,
	onChange,
}: TabSwitcherProps) => {
	return (
		<div className={styles['tabs']}>
			{tabs.map(tab => (
				<button
					key={tab.id}
					className={`${styles['tabs-item']} ${
						activeTab === tab.type ? styles['active-tab'] : ''
					}`}
					onClick={() => onChange(tab.type)}
				>
					{tab.label}
				</button>
			))}
		</div>
	)
}
