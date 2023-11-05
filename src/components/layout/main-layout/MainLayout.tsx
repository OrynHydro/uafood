'use client'
import { FC, PropsWithChildren } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { usePathname } from 'next/navigation'

const MainLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const pathname = usePathname()
	return (
		<>
			<Header />
			{children}
			{pathname !== '/' && pathname !== '/products' && <Footer />}
		</>
	)
}

export default MainLayout
