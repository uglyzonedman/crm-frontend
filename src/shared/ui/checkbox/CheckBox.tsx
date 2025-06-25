import React from 'react'
import styles from './styles.module.scss'

interface Checkbox extends React.InputHTMLAttributes<HTMLInputElement> {
	id: string
	label: string
}

export const Checkbox = ({ id, label, ...props }: Checkbox) => (
	<div className={styles.wrapper}>
		<input type='checkbox' id={id} className={styles.input} {...props} />
		<label htmlFor={id} className={styles.label}>
			{label}
		</label>
	</div>
)
