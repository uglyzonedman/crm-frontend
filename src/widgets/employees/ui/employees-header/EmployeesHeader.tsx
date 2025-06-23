import { TabSwitcher } from '@/src/features/employee-tabs/ui'
import React from 'react'
import styles from './styles.module.scss'

export const EmployeesHeader = ({
	employees,
	activeTab,
	tabs,
	setActiveTab,
}) => {
	return (
		<div className={styles['header']}>
			<h3 className={styles['header-title']}>
				Сотрудники ({employees.length})
			</h3>
			<TabSwitcher tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
			<div className='actions'>{/* {Actions}  */}</div>
		</div>
	)
}
