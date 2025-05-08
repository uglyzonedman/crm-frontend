import React from 'react'
import logo from '@/src/assets/images/LogoSign.png'
import Image from 'next/image'
import info from '@/src/assets/images/signinphoto.png'

export const Info = () => {
	return (
		<div className='flex flex-col justify-center h-full px-12'>
			<div className='flex items-center'>
				<Image src={logo} alt='logo' />
				<h3 className='text-3xl text-white font-bold ml-8'>Woorkroom</h3>
			</div>
			<p className='font-bold text-white text-5xl my-12 leading-tight'>
				Your place to work
				<br />
				Plan. Create. Control.
			</p>
			<Image className='mt-12' src={info} alt='info' />
		</div>
	)
}
