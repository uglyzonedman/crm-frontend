'use client'
import { Welcome } from '@/widgets'
import React from 'react'
import styles from './styles.module.scss'
import { SignInForm } from '@/features'
export const SignInScreen = () => {
	return (
		<div className={styles['wrapper']}>
			<Welcome />
			<SignInForm />
		</div>
	)
}
