import React from 'react'
import styles from './styles.module.scss'
import { Welcome } from '@/widgets'
import { SignUpForm } from '@/features'
export const SignUpScreen = () => {
  return (
    <div className={styles['wrapper']}>
      <Welcome />
      <SignUpForm />
    </div>
  )
}
