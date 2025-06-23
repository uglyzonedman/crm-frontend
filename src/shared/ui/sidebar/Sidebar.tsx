import React from 'react'
import logo from '@/src/assets/images/Logo.png'
import support from '@/src/assets/images/Support.png'
import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { navigations } from './data'
import styles from './styles.module.scss'

export const Sidebar = () => {
	return (
		<aside className={styles['sidebar']}>
			<div>
				<div className={styles['sidebar-logo']}>
					<Image src={logo} alt='logo' />
				</div>
				<nav className={styles['sidebar-nav']}>
					{navigations.map(item => (
						<Link
							key={item.title}
							href={item.url}
							className={styles['sidebar-nav__item']}
						>
							{item.icon}
							<span className={styles['sidebar-nav__item__title']}>
								{item.title}
							</span>
						</Link>
					))}
				</nav>
			</div>
			<div className={styles['sidebar-support']}>
				<Image src={support} alt='support' />
				<button className={styles['sidebar-support__btn']}>
					<MessageCircle style={{ color: 'white' }} />
					<p className={styles['sidebar-support__btn__text']}>Support</p>
				</button>
			</div>
		</aside>
	)
}
