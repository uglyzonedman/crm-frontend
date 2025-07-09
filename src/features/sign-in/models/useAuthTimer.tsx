'use client'
import { useEffect, useState } from 'react'
export const useAuthTimer = (isActive: boolean) => {
  const [remainingTime, setRemainingTime] = useState(0)

  useEffect(() => {
    const sentTime = localStorage.getItem('auth-code-sent-time')
    if (sentTime) {
      const now = Date.now()
      const elapsed = now - parseInt(sentTime, 10)
      const total = 2 * 60 * 1000
      const remaining = total - elapsed
      if (remaining > 0) {
        setRemainingTime(Math.floor(remaining / 1000))
      } else {
        localStorage.removeItem('auth-code-sent-time')
      }
    }
  }, [])

  useEffect(() => {
    if (!isActive || remainingTime <= 0) return
    const interval = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          localStorage.removeItem('auth-code-sent-time')
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [isActive, remainingTime])

  return { remainingTime, setRemainingTime }
}
