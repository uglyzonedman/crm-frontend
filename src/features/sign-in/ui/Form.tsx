'use client'
import { ArrowRight, Check, Eye, MoveRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export const Form = () => {
	const [typePassword, setTypePassword] = useState('password')
	const [isRemember, setIsRemember] = useState(false)

	const changeTypePassword = () => {
		setTypePassword(prev => (prev == 'password' ? 'text' : 'password'))
	}

	const changeRemember = () => {
		setIsRemember(prev => !prev)
	}

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
			}}
			className='flex flex-col items-center h-full justify-center w-[400px] mx-auto'
		>
			<h3 className='text-[#0A1629] text-2xl font-bold text-center'>
				Sign In to Woorkroom
			</h3>
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
			<div>
				<label className='text-[#7D8592] text-sm font-semibold mb-2 block mt-5'>
					Password
				</label>
				<div className='px-[18px] py-3 border-[#D8E0F0] border-[1px] border-solid rounded-2xl flex items-center justify-between w-[400px]'>
					<input
						className='w-full outline-none placeholder:text-[#7D8592] text-[#7D8592]'
						type={typePassword}
						placeholder='••••••'
					/>
					<button
						onClick={() => changeTypePassword()}
						className='block ml-2 cursor-pointer'
					>
						<Eye color='#7D8592' />
					</button>
				</div>
			</div>

			<div className='flex items-center mt-8 w-[400px] justify-between'>
				<div className='flex items-center'>
					<button
						onClick={() => changeRemember()}
						className='w-6 h-6 border-[1px] border-solid border-[#0A1629] rounded-sm cursor-pointer flex items-center justify-center'
					>
						{isRemember && (
							<div className='flex items-center justify-center'>
								<Check color='#3F8CFF' size={22} />
							</div>
						)}
					</button>
					<span className='text-[#7D8592] text-base ml-2'>Remember me</span>
				</div>
				<Link className='text-[#7D8592] text-base' href={'/'}>
					Forgot Password?
				</Link>
			</div>

			<button className='bg-[#3F8CFF] flex items-center   px-5 py-3 rounded-2xl cursor-pointer w-[160px] justify-center mt-10'>
				<span className='text-white text-base font-bold mr-4'>Sign In</span>
				<MoveRight color='#fff' />
			</button>
			<Link className='text-[#3F8CFF] font-semibold text-base mt-7' href={'/'}>
				Don't have an account ?
			</Link>
		</form>
	)
}
