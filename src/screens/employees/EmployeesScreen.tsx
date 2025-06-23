'use client'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import avatar from '../../assets/images/Logo.png'
import Image from 'next/image'
import {
	EllipsisVertical,
	Funnel,
	MoveLeft,
	MoveRight,
	Plus,
} from 'lucide-react'
import { EmployeeCard } from '@/src/entities'
import { EmployeesHeader, EmployeesWidget } from '@/src/widgets'
import { employeesList } from '@/src/shared/consts/employees_list'

export const EmployeesScreen = () => {
	const [activeTab, setActiveTab] = useState('list')
	const tabs = [
		{ id: 1, label: 'Список', type: 'list' },
		{ id: 2, label: 'Таблица', type: 'table' },
	]
	return (
		<div>
			<EmployeesHeader
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				employees={employeesList}
				tabs={tabs}
			/>
			{employeesList.map(emp => (
				<EmployeeCard key={emp.id} employee={emp} />
			))}
		</div>
		// <div className={styles['employees']}>
		// 	<div className={styles['employees-header']}>
		// 		<h3 className={styles['employees-header__title']}>Сотрудники (28)</h3>
		// 		<div className={styles['employees-header__tabs']}>
		// 			{type_tabs.map(item => (
		// 				<button
		// className={`${styles['employees-header__tabs__item']} ${
		// 	activeTab === item.type ? styles['active-tab'] : ''
		// }`}
		// 					key={item.id}
		// 					onClick={() => setActiveTab(item.type)}
		// 				>
		// 					{item.label}
		// 				</button>
		// 			))}
		// 		</div>

		// 		<div className={styles['employees-header__actions']}>
		// 			<button className={styles['employees-header__actions__filter']}>
		// 				<Funnel />
		// 			</button>
		// 			<button className={styles['employees-header__actions__add']}>
		// 				<Plus />
		// 				Добавить сотрудника
		// 			</button>
		// 		</div>
		// 	</div>

		// 	{employeesList.map((item, index) => (
		// 		<EmployeeCard employee={item} />
		// 	))}

		// 	<div className={styles['employees-footer']}>
		// 		<div className={styles['employees-footer__pagination']}>
		// 			<span className={styles['employees-footer__pagination__count']}>
		// 				1-8 из 28
		// 			</span>
		// 			<div className={styles['employees-footer__pagination__arrows']}>
		// 				<button
		// 					className={styles['employees-footer__pagination__arrows__item']}
		// 				>
		// 					<MoveLeft />
		// 				</button>
		// 				<button
		// 					className={styles['employees-footer__pagination__arrows__item']}
		// 				>
		// 					<MoveRight />
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	)
}
