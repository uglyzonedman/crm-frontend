'use client';
import React from 'react';
import styles from './styles.module.scss';
import { StatusBar } from '@/widgets';
import { Button, REGISTRATION_STEPS } from '@/shared';
import { VerifyAccountForm } from '@/features';
import { useAuthStore } from '@/features/sign-up/models';

export const SignUpScreen = () => {
  const { step, setStep, completedSteps } = useAuthStore(state => state);

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <VerifyAccountForm />;

      default:
        return null;
    }
  };
  console.log('completedSteps', completedSteps);
  const isStepComplete = completedSteps[step] === true;

  return (
    <div className={styles['sign-up']}>
      <StatusBar step={step} setStep={setStep} />
      <div className={styles['sign-up__form']}>
        <div className={styles['sign-up__form__content']}>
          <span className={styles['sign-up__form__content__step']}>
            Этап {step} / {REGISTRATION_STEPS.length}
          </span>
          <h3 className={styles['sign-up__form__content__title']}>
            {REGISTRATION_STEPS[step].label}
          </h3>
          {renderStepContent(step)}
        </div>
        <div className={styles['sign-up__form__footer']}>
          <Button
            typeStyle="ghost"
            disabled={!isStepComplete}
            onClick={() => {
              if (step < REGISTRATION_STEPS.length) {
                setStep(step + 1);
              }
            }}
          >
            Следующий этап
          </Button>
        </div>
      </div>
    </div>
  );
};
