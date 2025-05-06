import type { ReactNode } from 'react'
import { Nunito_Sans } from 'next/font/google'
import '../../globals.css'

const nunito = Nunito_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
	variable: '--font-nunito',
	display: 'swap',
})

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='ru'>
			<head></head>
			<body className={nunito.className}>
				<main>{children}</main>
			</body>
		</html>
	)
}
