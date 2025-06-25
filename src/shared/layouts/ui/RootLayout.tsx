'use client'
import React from 'react'
import { MainHeader, Sidebar } from '@/shared'
import styles from './styles.module.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			staleTime: 5 * 60 * 1000,
			refetchOnWindowFocus: false,
		},
	},
})

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className={styles['root-wrapper']}>
				<Sidebar />
				<main className={styles['root-main']}>
					<MainHeader />
					<div>{children}</div>
				</main>
			</div>
		</QueryClientProvider>
	)
}
