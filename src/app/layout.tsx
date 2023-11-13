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
	description:
		'Explore the exquisite world of frozen berries with UAFOOD. Indulge in the freshness and flavor of berries all year round. Our high-quality products undergo rapid freezing, preserving the wholesome properties and unique taste of fresh berries. Discover a wealth of options: from juicy strawberries and blueberries to aromatic raspberries and beautiful rose hips. Our frozen berries make the perfect addition to your breakfast, desserts, or refreshing beverages. The possibilities are endless! Beyond unparalleled taste, our frozen berries are rich in vitamins and antioxidants, supporting your health and inspiring an active lifestyle. Order now and immerse yourself in the world of true taste and freshness with UAFOOD. Create your favorite dishes, craft magical cocktails, and savor frozen berries at any time of the year!',
	icons: 'favicon.ico',
	keywords: [
		'frozen berries',
		'high-quality fruit',
		'rapid freezing',
		'fresh taste',
		'juicy strawberries',
		'blueberries',
		'aromatic raspberries',
		'rose hips',
		'breakfast',
		'desserts',
		'refreshing beverages',
		'vitamins',
		'antioxidants',
		'health',
		'active lifestyle',
		'order now',
		'true taste',
		'freshness',
		'заморожені ягоди',
		'високоякісне фруктове асорті',
		'швидке заморожування',
		'свіжий смак',
		'соковиті полуниці',
		'чорниці',
		'ароматні малини',
		'шипшина',
		'сніданок',
		'десерти',
		'освіжальні напої',
		'вітаміни',
		'антиоксиданти',
		"здоров'я",
		'активний спосіб життя',
		'замовлення зараз',
		'справжній смак',
		'свіжість',
	],
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
