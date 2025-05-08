import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import { Layout } from '@/src/widgets'

export const metadata: Metadata = {
	title: 'CRM',
	description: 'CRM 24',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
