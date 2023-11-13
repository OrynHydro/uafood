'use client'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { usePathname } from 'next/navigation'

const MainLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const pathname = usePathname()
	useEffect(() => {
		const systemLanguage = navigator.language
		const storageLanguage = localStorage.getItem('language')
		!storageLanguage && localStorage.setItem('language', systemLanguage)
	}, [])

	return (
		<>
			<Header />
			{children}
			{pathname !== '/' && pathname !== '/contacts' && <Footer />}
		</>
	)
}

export default MainLayout
