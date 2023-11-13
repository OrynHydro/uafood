'use client'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { usePathname } from 'next/navigation'

const MainLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const pathname = usePathname()
	const [rerenderKey, setRerenderKey] = useState('initial')

	useEffect(() => {
		const systemLanguage = navigator.language
		const storageLanguage = localStorage.getItem('language')

		if (!storageLanguage) {
			localStorage.setItem('language', systemLanguage)
		}

		// Change the key to trigger a re-render when the language changes
		setRerenderKey(storageLanguage || 'initial')
	}, [])
	return (
		<>
			<Header key={rerenderKey} />
			{children}
			{pathname !== '/' && pathname !== '/contacts' && <Footer />}
		</>
	)
}

export default MainLayout
