'use client'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Button, Checkbox, ILoginRequest, Input, Label } from '@/shared'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import { AuthStore } from '@/features/sign-in'
import { useRouter } from 'next/navigation'
export const SignInForm = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [rememberMe, setRememberMe] = useState(false)
	const [data, setData] = useState<ILoginRequest>({
		identifier: '',
		password: '',
	})
	const { login } = AuthStore(state => state)
	const { push } = useRouter()

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				login({ identifier: data.identifier, password: data.password }).then(
					res => {
						if (res.status == 'success') {
							push('/')
						}
					}
				)
			}}
			className={styles['form']}
		>
			<h3 className={styles['form-title']}>Авторизоваться в Woorkroom</h3>
			<div className={styles['form-inputs']}>
				<div className={styles['form-inputs__input']}>
					<Label
						className={styles['form-inputs__input__label']}
						children={'Email адрес или логин'}
					/>
					<Input
						onChange={e =>
							setData(prev => ({
								...prev,
								identifier: e.target.value,
							}))
						}
						placeholder='username'
						type='text'
					/>
				</div>
				<div className={styles['form-inputs__input']}>
					<Label
						className={styles['form-inputs__input__label']}
						children={'Пароль'}
					/>
					<Input
						onChange={e =>
							setData(prev => ({
								...prev,
								password: e.target.value,
							}))
						}
						placeholder='••••••••'
						showPassword={showPassword}
						setShowPassword={setShowPassword}
						type='password'
					/>
				</div>
			</div>
			<div className={styles['form-remember']}>
				<Checkbox
					id='agree'
					label='Запомнить меня'
					checked={rememberMe}
					onChange={e => setRememberMe(e.target.checked)}
				/>
				<Link href={'/recovery-password/zxclobby'}>Забыл пароль?</Link>
			</div>
			<Button
				type='submit'
				children={'Войти в аккаунт'}
				iconRight={MoveRight}
				isIconRight={true}
				className={styles['form-submit']}
			/>
			<Link className={styles['form-notaccount']} href={'/'}>
				Нет аккаунта?
			</Link>
		</form>
	)
}
