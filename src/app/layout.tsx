import type { Metadata } from 'next'
import './globals.scss'
import MainLayout from '@/components/layout/main-layout/MainLayout'
import { Sawarabi_Mincho } from 'next/font/google'
import { LanguageProvider, useLanguage } from '@/context/LanguageContext'

const sawabari = Sawarabi_Mincho({
	weight: '400',
	subsets: ['latin'],
	variable: '--var-sawabari',
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
	// const { language } = useLanguage()
	return (
		<html lang='en'>
			<body className={sawabari.className}>
				{/* <LanguageProvider> */}
				<MainLayout>{children}</MainLayout>
				{/* </LanguageProvider> */}
			</body>
		</html>
	)
}
