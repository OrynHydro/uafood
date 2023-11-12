import type { Metadata } from 'next'
import './globals.scss'
import MainLayout from '@/components/layout/main-layout/MainLayout'
import { Sawarabi_Mincho } from 'next/font/google'

const sawabari = Sawarabi_Mincho({
	weight: '400',
	subsets: ['latin'],
	variable: '--var-sawabari',
})

export const metadata: Metadata = {
	title: 'UAFOOD',
	description: 'UAFOOD website',
	icons: 'favicon.ico',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={sawabari.className}>
				<link rel='shortcut icon' href='/favicon.ico' sizes='any' />
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
