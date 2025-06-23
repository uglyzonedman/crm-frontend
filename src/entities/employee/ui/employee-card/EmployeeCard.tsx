import React from 'react'
import { IEmployee } from '../../model'
import styles from './styles.module.scss'
import { EllipsisVertical } from 'lucide-react'

interface Props {
	employee: IEmployee
}

const detailFields = [
	{ key: 'gender', label: 'Пол' },
	{ key: 'birthday', label: 'Дата рождения' },
	{ key: 'fullAge', label: 'Полный возраст' },
	{ key: 'Position', label: 'Должность' },
] as const

export const EmployeeCard = ({ employee }: Props) => {
	return (
		<div className={styles['card']}>
			<div className={styles['card-personal']}>
				<div className={styles['card-personal__avatar']}>
					<span>{employee.fullname[0]}</span>
				</div>
				<div className={styles['card-personal__info']}>
					<span>{employee.fullname}</span>
					<p>{employee.email}</p>
				</div>
			</div>

			{detailFields.map(field => (
				<div key={field.key} className={styles['card-personal__detail']}>
					<span>{field.label}</span>
					<p>{employee[field.key]}</p>
				</div>
			))}

			<button className={styles['card-personal__more']}>
				<EllipsisVertical />
			</button>
		</div>
	)
}
