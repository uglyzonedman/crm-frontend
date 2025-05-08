'use client'
import { SignUpScreen } from '@/src/screens'
import { useParams } from 'next/navigation'
import React from 'react'

type ParamsType = {
	step: 'stage-1' | 'stage-2' | 'stage-3' | 'stage-4'
}

const SignUpStepPage = () => {
	const { step }: ParamsType = useParams()

	return <SignUpScreen typeStage={step} />
}

export default SignUpStepPage
