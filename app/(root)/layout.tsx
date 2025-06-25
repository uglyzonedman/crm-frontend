import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import { RootLayout } from '@/shared'

export const metadata: Metadata = {
	title: 'CRM',
	description: 'CRM 24',
}

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body>
				<RootLayout>{children}</RootLayout>
			</body>
		</html>
	)
}
