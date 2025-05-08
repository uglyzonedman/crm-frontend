import { Form } from '@/src/features/sign-in'
import { Info } from '@/src/widgets'
import React from 'react'

export const SignInScreen = () => {
	return (
		<div className='flex h-screen'>
			<div className='w-1/2 bg-[#3F8CFF] p-[80px]'>
				<Info />
			</div>
			<div className='w-1/2 bg-white p-[80px]'>
				<Form />
			</div>
		</div>
	)
}
