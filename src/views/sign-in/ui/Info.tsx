import React from 'react'
import logo from '@/src/assets/images/LogoSign.png'
import Image from 'next/image'
import info from '@/src/assets/images/signinphoto.png'
export const Info = () => {
	return (
		<div className=''>
			<div className='flex items-center'>
				<Image src={logo} alt='logo' />
				<h3 className='text-3xl text-white font-bold'>Woorkroom</h3>
			</div>
			<p className='font-bold text-white text-4xl'>
				Your place to work Plan. Create. Control.
			</p>
			<Image src={info} alt='info' />
		</div>
	)
}
