import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';
import { Button, Input, Label } from '@/shared';
import { useQuery } from '@tanstack/react-query';
import { RoleService } from '@/shared/services/role.service';
import { Info } from 'lucide-react';

export const VerifyAccountForm = () => {
  const { data: roles, isLoading: isLoadingRoles } = useQuery({
    queryKey: ['get-all-roles-without-admin'],
    queryFn: () => RoleService.getAllRolesWithoutAdmin(),
  });

  const [data, setData] = useState<{
    email: string;
    login: string;
    password: string;
    repeatPassword: string;
    roleId: string;
  }>({ email: '', login: '', password: '', repeatPassword: '', roleId: '' });

  const onChangeData = (
    key: 'email' | 'login' | 'password' | 'repeatPassword' | 'roleId',
    value: string
  ) => {
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
            <Button
              style={{ marginTop: '16px', cursor: 'pointer', padding: '8px' }}
              type="button"
              disabled={!data.email.trim()}
              onClick={() => {
                console.log('Отправка кода на:', data.email);
              }}
            >
              Отправить код
            </Button>
          </div>
        </div>
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
          <div className={styles['form-inputs__codes__description']}>
            <Info />
            <p>Вам отправлено сообщение на почту. Код действителен - 2:39 </p>
          </div>
        </div>
        <div className={styles['form-inputs__input']}>
          <Label>Логин</Label>
          <Input
            onChange={e => onChangeData('login', e.target.value)}
            type="text"
            placeholder="test"
          />
        </div>
        <div className={styles['form-inputs__input']}>
          <Label>Пароль</Label>
          <Input
            onChange={e => onChangeData('password', e.target.value)}
            type="password"
            placeholder="************"
          />
        </div>
        <div className={styles['form-inputs__input']}>
          <Label>Подтвердите пароль</Label>
          <Input
            onChange={e => onChangeData('repeatPassword', e.target.value)}
            type="password"
            placeholder="************"
          />
        </div>
        <div className={styles['form-inputs__roles']}>
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
        </div>
      </div>
    </form>
  );
};
