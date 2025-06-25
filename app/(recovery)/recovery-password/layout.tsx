import React from 'react'
import '../../globals.css'
const RecoveryPasswordLayout = ({
	children,
}: {
	children: React.ReactNode
}) => {
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
				<main>{children}</main>
			</body>
		</html>
	)
}

export default RecoveryPasswordLayout
