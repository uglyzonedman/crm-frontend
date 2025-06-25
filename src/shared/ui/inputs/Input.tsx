import React from 'react'
import styles from './styles.module.scss'
import { Eye, EyeOff } from 'lucide-react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	showPassword?: boolean
	setShowPassword?: (bool: boolean) => void
}

export const Input = ({
	setShowPassword,
	showPassword,
	type,
	...rest
}: InputProps) => {
	const getInputType = (inputType: string | undefined): string => {
		if (inputType === 'password') {
			return showPassword ? 'text' : 'password'
		}
		return inputType || 'text'
	}
	return (
		<div className={styles['input']}>
			<input {...rest} type={getInputType(type)} />

			{type === 'password' &&
				typeof showPassword === 'boolean' &&
				setShowPassword && (
					<div
						onClick={() => setShowPassword(!showPassword)}
						style={{ cursor: 'pointer', display: 'flex' }}
					>
						{showPassword ? <EyeOff /> : <Eye />}
					</div>
				)}
		</div>
	)
}
