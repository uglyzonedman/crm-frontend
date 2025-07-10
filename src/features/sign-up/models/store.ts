import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  step: number;
  setStep: (val: number) => void;

  email: string;
  setEmail: (val: string) => void;

  codeExpiresAt: number;
  setCodeExpiresAt: (val: number) => void;

  isSendCode: boolean;
  setIsSendCode: (val: boolean) => void;

  isConfirmEmail: boolean;
  setIsConfirmEmail: (val: boolean) => void;

  completedSteps: Record<number, boolean>;
  setCompletedStep: (step: number, val: boolean) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      step: 1,
      setStep: val => set({ step: val }),

      email: '',
      setEmail: val => set({ email: val }),

      codeExpiresAt: 0,
      setCodeExpiresAt: val => set({ codeExpiresAt: val }),

      isSendCode: false,
      setIsSendCode: val => set({ isSendCode: val }),

      isConfirmEmail: false,
      setIsConfirmEmail: val => set({ isConfirmEmail: val }),

      completedSteps: {},
      setCompletedStep: (step, val) =>
        set(state => ({
          completedSteps: { ...state.completedSteps, [step]: val },
        })),
    }),
    {
      name: 'auth-storage',
    }
  )
);
