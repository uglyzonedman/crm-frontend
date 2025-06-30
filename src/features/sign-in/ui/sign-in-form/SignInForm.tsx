'use client'
import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'
import { Button, setStorageCookie } from '@/shared'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import {
  useAuthTimer,
  useLoginMutation,
  useVerifyLoginMutation,
} from '../../models'
import { EmailInput } from '../email-input'
import { CodeInput } from '../code-input'
import { TimerNotice } from '../timer-notice'

export const SignInForm = () => {
  const { push } = useRouter()
  const [email, setEmail] = useState('')
  const [isSendMessageCode, setIsSendMessageCode] = useState(false)
  const [code, setCode] = useState(Array(6).fill(''))
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const { remainingTime, setRemainingTime } = useAuthTimer(isSendMessageCode)

  const loginMutation = useLoginMutation(() => {
    setIsSendMessageCode(true)
    const now = Date.now()
    localStorage.setItem('auth-code-sent-time', now.toString())
    setRemainingTime(120)
  })

  const verifyLoginMutation = useVerifyLoginMutation({
    code,
    onSuccess: res => {
      setStorageCookie({
        key: 'accessToken',
        value: res.data.tokens.accessToken,
        expires: res.data.tokens.accessTokenExpiresAt,
      })
      setStorageCookie({
        key: 'refreshToken',
        value: res.data.tokens.refreshToken,
        expires: res.data.tokens.refreshTokenExpiresAt,
      })
      toast.success(res.data.message || 'Успешный вход', {
        id: 'verify-login',
      })
      push('/info-portal')
    },
  })

  const handleCodeChange = (index: number, value: string) => {
    const updated = [...code]
    updated[index] = value
    setCode(updated)
  }

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && code[index] === '' && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSendMessageCode) {
      verifyLoginMutation.mutate()
    } else {
      loginMutation.mutate({ identifier: email })
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles['form']}>
      <h3 className={styles['form-title']}>Авторизоваться в Woorkroom</h3>

      {!isSendMessageCode ? (
        <div className={styles['form-inputs']}>
          <EmailInput value={email} onChange={setEmail} />
        </div>
      ) : (
        <>
          <div className={styles['form-codes']}>
            <label>Введите код</label>
            <CodeInput
              code={code}
              onChangeCode={handleCodeChange}
              inputsRef={inputsRef}
              onBackspace={handleBackspace}
            />
          </div>

          <TimerNotice email={email} remainingTime={remainingTime} />

          <div style={{ margin: '20px auto 0' }}>
            <Button
              type="button"
              className={styles['form-back']}
              onClick={() => {
                setIsSendMessageCode(false)
                setCode(Array(6).fill(''))
                localStorage.removeItem('auth-code-sent-time')
              }}
            >
              Вернуться назад
            </Button>
          </div>
        </>
      )}

      {isSendMessageCode ? (
        remainingTime > 0 ? (
          <Button
            type="submit"
            iconRight={MoveRight}
            isIconRight={true}
            className={styles['form-submit']}
          >
            Отправить код авторизации
          </Button>
        ) : (
          <Button
            type="button"
            iconRight={MoveRight}
            isIconRight={true}
            className={styles['form-submit']}
            onClick={() => loginMutation.mutate({ identifier: email })}
          >
            Запросить код еще раз
          </Button>
        )
      ) : (
        <Button
          type="submit"
          iconRight={MoveRight}
          isIconRight={true}
          className={styles['form-submit']}
        >
          Войти в аккаунт
        </Button>
      )}

      <Link className={styles['form-notaccount']} href={'/auth/sign-up'}>
        Нет аккаунта?
      </Link>
    </form>
  )
}
