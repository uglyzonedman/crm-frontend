'use client';
import React from 'react';
import styles from './styles.module.scss';
import { StatusBar } from '@/widgets';
import { Button, REGISTRATION_STEPS } from '@/shared';
import { CreateAccount, VerifyAccountForm } from '@/features';
import { useAuthStore } from '@/features/sign-up/models';

export const SignUpScreen = () => {
  const { step, setStep, completedSteps } = useAuthStore(state => state);
  console.log('step', step);
  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <VerifyAccountForm />;
      case 2:
        return <CreateAccount />;
      default:
        return null;
    }
  };
  console.log('completedSteps', completedSteps);
  const isStepComplete = completedSteps[step] === true;

  return (
    <div className={styles['sign-up']}>
      <StatusBar step={step} setStep={setStep} />
      <div className={styles['sign-up__form']}>{renderStepContent(step)}</div>
    </div>
  );
};
