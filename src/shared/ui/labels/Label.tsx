import React from 'react'
import styles from './styles.module.scss'

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({ children, className, ...rest }: LabelProps) => {
	return (
		<label className={`${styles['label']} ${className ?? ''}`} {...rest}>
			{children}
		</label>
	)
}
