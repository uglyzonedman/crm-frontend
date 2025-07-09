'use client';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { StatusBar } from '@/widgets';
import { REGISTRATION_STEPS } from '@/shared';

export const SignUpScreen = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  return (
    <div className={styles['sign-up']}>
      <StatusBar step={currentStep} setStep={setCurrentStep} />
      <div className={styles['sign-up__form']}>
        <span className={styles['sign-up__form__step']}>
          Этап {currentStep} / {REGISTRATION_STEPS.length}
        </span>
        <h3 className={styles['sign-up__form__title']}>{REGISTRATION_STEPS[currentStep].label}</h3>
      </div>
    </div>
  );
};

