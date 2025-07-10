import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { AuthService, Button, Input, Label } from '@/shared';
import { Info } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useAuthStore } from '../../models/store';

export const VerifyAccountForm = () => {
  const {
    setEmail,
    setCodeExpiresAt,
    codeExpiresAt,
    isSendCode,
    setIsSendCode,
    setCompletedStep,
    isConfirmEmail,
    setIsConfirmEmail,
  } = useAuthStore(state => state);
  const [data, setData] = useState<{
    email: string;
  }>({ email: '' });
  const onChangeData = (key: 'email', value: string) => {
    setData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const [code, setCode] = useState(['', '', '', '']);
  const codeRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    let val = e.target.value;

    val = val.replace(/\D/g, '');

    if (val.length > 1) val = val[0];

    const next = [...code];
    next[idx] = val;
    setCode(next);

    if (val && idx < 3) {
      codeRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace') {
      if (!code[idx] && idx > 0) {
        codeRefs.current[idx - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData('Text').replace(/\D/g, '');
    if (pasted.length === 0) return;

    const digits = pasted.slice(0, 4).split('');
    const newCode = ['', '', '', ''];
    digits.forEach((digit, i) => {
      newCode[i] = digit;
    });
    setCode(newCode);
    codeRefs.current[digits.length - 1]?.focus();

    e.preventDefault();
  };

  const { mutate: sendCode } = useMutation({
    mutationKey: ['send-code'],
    mutationFn: () => AuthService.sendCode({ email: data.email }),
    onSuccess: res => {
      toast.success(res.message);
      setEmail(data.email);
      const expiresAtSeconds = Math.floor(new Date(res.data.codeExpiresAt).getTime() / 1000);
      setCodeExpiresAt(expiresAtSeconds);
      setIsSendCode(true);
    },
  });

  const { mutate: verifyAccount } = useMutation({
    mutationKey: ['verify-account'],
    mutationFn: () => AuthService.verifyAccount({ code: code.join('') }),
    onSuccess: data => {
      toast.success(data.message);
      setCompletedStep(1, true);
      setIsConfirmEmail(true);
    },
  });

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!isSendCode || !codeExpiresAt) return;

    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const diff = codeExpiresAt - now;

      if (diff <= 0) {
        setIsSendCode(false);
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isSendCode, codeExpiresAt]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <form className={styles['form']}>
      <div className={styles['form-inputs']}>
        <div className={styles['form-inputs__input']}>
          <Label>Email</Label>
          <div>
            <Input
              onChange={e => onChangeData('email', e.target.value)}
              type="email"
              placeholder="test@test.test"
              value={data.email}
              style={{ flex: 1 }}
            />
            {!isSendCode && (
              <Button
                style={{ marginTop: '16px' }}
                type="button"
                disabled={!data.email.trim()}
                onClick={() => {
                  sendCode();
                }}
              >
                Отправить код
              </Button>
            )}
          </div>
        </div>
        {isSendCode && !isConfirmEmail && (
          <Button
            type="button"
            typeStyle="danger"
            style={{ marginTop: '10px' }}
            onClick={() => {
              setIsSendCode(false);
              setIsConfirmEmail(false);
              setData({ email: '' });
              setCode(['', '', '', '']);
              setTimeLeft(0);
            }}
          >
            Отменить
          </Button>
        )}
        {isSendCode && timeLeft > 0 && !isConfirmEmail && (
          <div className={styles['form-inputs__codes']}>
            <Label>Код подтверждения</Label>
            <div className={styles['form-inputs__codes__inputs']}>
              {code.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  className={styles['form-inputs__codes__inputs__input']}
                  value={digit}
                  onChange={e => handleCodeChange(e, idx)}
                  onKeyDown={e => handleKeyDown(e, idx)}
                  onPaste={handlePaste}
                  ref={el => (codeRefs.current[idx] = el)}
                />
              ))}
            </div>
            <div>
              <div className={styles['form-inputs__codes__description']}>
                <Info />
                <p>Вам отправлено сообщение на почту. Код действителен – {formatTime(timeLeft)}</p>
              </div>
              <Button type="button" typeStyle="success" onClick={() => verifyAccount()}>
                Подтвердить код
              </Button>
            </div>
          </div>
        )}

        {isSendCode && timeLeft == 0 && !isConfirmEmail && (
          <div>
            <div className={styles['form-inputs__codes__description']}>
              <Info />
              <p>Ваш код больше не является валидным</p>
            </div>
            <Button
              typeStyle="warning"
              style={{ marginTop: '10px' }}
              type="button"
              onClick={() => sendCode()}
            >
              Отправить код повторно
            </Button>
          </div>
        )}

        {isConfirmEmail && (
          <div className={styles['form-inputs__codes__description']}>
            <Info />
            <p>Вы успешно подтвердили свою почту</p>
          </div>
        )}

        {/* <div className={styles['form-inputs__roles']}>
          <Label>Выберите роль</Label>
          <div className={styles['form-inputs__roles__content']}>
            {isLoadingRoles
              ? []
              : roles?.data.map(role => (
                  <div
                    className={`${
                      data.roleId === role.id
                        ? styles['form-inputs__roles__item__active']
                        : styles['form-inputs__roles__item__default']
                    }`}
                    onClick={() => onChangeData('roleId', role.id)}
                    key={role.id}
                  >
                    <span>{role.label}</span>
                  </div>
                ))}
          </div>
        </div>     */}
      </div>
    </form>
  );
};
