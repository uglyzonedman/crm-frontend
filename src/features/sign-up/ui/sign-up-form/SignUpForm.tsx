'use client'
import React, { FormEvent, useState } from 'react'
import styles from './styles.module.scss'
import { Button, Input, Label } from '@/shared'
import Link from 'next/link'
import { useRegister } from '../../models'

export const SignUpForm = () => {
  const [data, setData] = useState({
    email: '',
    login: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    login: '',
  })

  const onChangeData = (index: keyof typeof data, value: string) => {
    setData(prev => ({
      ...prev,
      [index]: value,
    }))
    setErrors(prev => ({
      ...prev,
      [index]: '',
    }))
  }

  const { mutate: register } = useRegister()

  const validate = () => {
    let valid = true
    const newErrors = { email: '', login: '' }

    if (!data.email) {
      newErrors.email = 'Email обязателен'
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Невалидный email'
      valid = false
    }

    if (!data.login) {
      newErrors.login = 'Логин обязателен'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const onSubmitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return
    register({ email: data.email, login: data.login })
  }

  return (
    <form className={styles['form']} onSubmit={onSubmitData}>
      <h3 className={styles['form-title']}>Регистрация в Woorkroom</h3>
      <div className={styles['form-content']}>
        <div className={styles['form-content__field']}>
          <Label>Email адрес</Label>
          <Input
            onChange={e => onChangeData('email', e.target.value)}
            placeholder="test@test.test"
            type="email"
            value={data.email}
          />
          {errors.email && (
            <div className={styles['form-error']}>{errors.email}</div>
          )}
        </div>

        <div className={styles['form-content__field']}>
          <Label>Логин</Label>
          <Input
            onChange={e => onChangeData('login', e.target.value)}
            placeholder="test"
            type="text"
            value={data.login}
          />
          {errors.login && (
            <div className={styles['form-error']}>{errors.login}</div>
          )}
        </div>

        <Button className={styles['form-content__submit']} type="submit">
          Зарегистрироваться
        </Button>

        <Link className={styles['form-haveaccount']} href="/auth/sign-in">
          Есть аккаунт?
        </Link>
      </div>
    </form>
  )
}
