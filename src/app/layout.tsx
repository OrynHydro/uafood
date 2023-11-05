import type { Metadata } from 'next'
import './globals.scss'
import MainLayout from '@/components/layout/main-layout/MainLayout'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--var-montserrat',
})

export const metadata: Metadata = {
	title: 'UAFOOD',
	description: 'UAFOOD website',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
