'use client';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { StatusBar } from '@/widgets';
import { Button, REGISTRATION_STEPS } from '@/shared';
import { VerifyAccountForm } from '@/features';

export const SignUpScreen = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <VerifyAccountForm />;

      default:
        return null;
    }
  };

  return (
    <div className={styles['sign-up']}>
      <StatusBar step={currentStep} setStep={setCurrentStep} />
      <div className={styles['sign-up__form']}>
        <div className={styles['sign-up__form__content']}>
          <span className={styles['sign-up__form__content__step']}>
            Этап {currentStep} / {REGISTRATION_STEPS.length}
          </span>
          <h3 className={styles['sign-up__form__content__title']}>
            {REGISTRATION_STEPS[currentStep].label}
          </h3>
          {renderStepContent(currentStep)}
        </div>
        <div className={styles['sign-up__form__footer']}>
          <Button>Следующий этап</Button>
        </div>
      </div>
    </div>
  );
};
