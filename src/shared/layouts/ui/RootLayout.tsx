import React from 'react'
import { MainHeader, Sidebar } from '@/src/shared'
import styles from './styles.module.scss'
export const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles['root-wrapper']}>
			<Sidebar />
			<main className={styles['root-main']}>
				<MainHeader />
				<div>{children}</div>
			</main>
		</div>
	)
}
