'use client'
import React, { useState } from 'react'
import logo from '@/src/assets/images/LogoSign.png'
import Image from 'next/image'

type Props = {
	typeStage: 'stage-1' | 'stage-2' | 'stage-3' | 'stage-4'
}

export const SignUpScreen = ({ typeStage }: Props) => {
	const [step, setStep] = useState([
		{
			id: 1,
			title: 'Valid your phone',
			enabled: true,
		},
		{
			id: 2,
			title: 'Tell about yourself',
			enabled: false,
		},
		{
			id: 3,
			title: 'Tell about your company',
			enabled: false,
		},
		{
			id: 4,
			title: 'Invite Team Members',
			enabled: false,
		},
	])

	return (
		<div className='flex  min-h-screen'>
			<div
				className='bg-[#3F8CFF] py-[60px] px-[50px] flex-none'
				style={{ flex: '0 0 30%' }}
			>
				<Image src={logo} alt='logo' />

				<h3 className='text-white font-bold text-4xl mt-15 mb-[50px]'>
					Get started
				</h3>

				<div className='flex flex-col items-start gap-2'>
					{step.map((item, index) => (
						<div key={item.id} className='flex'>
							<div className='flex flex-col items-center'>
								<div
									className='w-6 h-6 border-[2px] border-white rounded-full mb-1'
									style={{ background: item.enabled ? '#fff' : 'transparent' }}
								></div>
								{index < step.length - 1 && (
									<div className='w-[2px] h-6 bg-white'></div>
								)}
							</div>
							<span className='text-white text-lg font-semibold ml-2'>
								{item.title}
							</span>
						</div>
					))}
				</div>
			</div>

			<div className='flex-1 bg-white py-[76px]'>
				<div className='w-[400px] mx-auto'>
					<p className='text-center text-[#3F8CFF] text-[14px] font-bold'>
						STEP 1/4
					</p>

					<div className='mt-8'>
						<label className='text-[#7D8592] text-sm font-semibold mb-2 block'>
							Email Address
						</label>
						<div className='w-full'>
							<input
								className='px-[18px] py-3 border-[#D8E0F0] border-[1px] border-solid rounded-2xl placeholder:text-[#7D8592] text-[#7D8592] w-[400px]'
								type='email'
								placeholder='youremail@gmail.com'
							/>
						</div>
					</div>
					<button className='bg-[#3F8CFF] text-white py-3 px-3 rounded-2xl cursor-pointer mt-2 font-bold'>
						Отправить код
					</button>
				</div>
			</div>
		</div>
	)
}
