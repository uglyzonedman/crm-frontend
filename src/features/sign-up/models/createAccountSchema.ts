import { z } from 'zod';

export const createAccountSchema = z
  .object({
    login: z
      .string()
      .min(3, 'Логин должен содержать минимум 3 символа')
      .max(20, 'Логин не должен превышать 20 символов')
      .regex(/^[a-zA-Z0-9_]+$/, 'Логин может содержать только буквы, цифры и _'),

    password: z
      .string()
      .min(8, 'Пароль должен содержать минимум 8 символов')
      .regex(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
      .regex(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
      .regex(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),

    repeatPassword: z.string(),
  })
  .refine(data => data.password === data.repeatPassword, {
    message: 'Пароли не совпадают',
    path: ['repeatPassword'],
  });

export type CreateAccountData = z.infer<typeof createAccountSchema>;
