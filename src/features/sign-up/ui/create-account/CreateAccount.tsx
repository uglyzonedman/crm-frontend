import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Button, Input, Label, REGISTRATION_STEPS } from '@/shared';
import * as z from 'zod';
import { useAuthStore } from '../../models';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const createAccountSchema = z
  .object({
    login: z
      .string()
      .min(3, 'Логин должен содержать минимум 3 символа')
      .max(20, 'Логин не должен превышать 20 символов')
      .regex(/^[a-zA-Z0-9_]+$/, 'Логин может содержать только буквы, цифры и знак подчеркивания'),
    password: z
      .string()
      .min(8, 'Пароль должен содержать минимум 8 символов')
      .regex(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
      .regex(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
      .regex(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

type CreateAccountForm = z.infer<typeof createAccountSchema>;

export const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountForm>({
    resolver: zodResolver(createAccountSchema),
    mode: 'onTouched',
  });

  const { step, setStep, completedSteps } = useAuthStore(state => state);

  const findCurrentStepLabel = (step: number) => {
    return REGISTRATION_STEPS.find(item => item.id == step)?.label;
  };

  const onSubmit = (data: CreateAccountForm) => {
    console.log('VALID DATA:', data);
    if (step < REGISTRATION_STEPS.length) {
      setStep(step + 1);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['create']}>
      <div>
        <span className={styles['create-step']}>
          Этап {step} / {REGISTRATION_STEPS.length}
        </span>
        <h3 className={styles['create-title']}>{findCurrentStepLabel(step)}</h3>
        <div className={styles['create-form']}>
          <div className={styles['create-input']}>
            <Label>Логин</Label>
            <Input {...register('login')} type="text" placeholder="chertami322" />
            {errors.login && <p className={styles['error']}>{errors.login.message}</p>}
          </div>
          <div className={styles['create-input']}>
            <Label>Пароль</Label>
            <Input {...register('password')} type="password" placeholder="••••••••" />
            {errors.password && <p className={styles['error']}>{errors.password.message}</p>}
          </div>
          <div className={styles['create-input']}>
            <Label>Подтвердите пароль</Label>
            <Input {...register('confirmPassword')} type="password" placeholder="••••••••" />
            {errors.confirmPassword && (
              <p className={styles['error']}>{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles['create-footer']}>
        <Button typeStyle="primary" type="submit">
          Следующий этап
        </Button>
      </div>
    </form>
  );
};
