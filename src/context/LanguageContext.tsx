'use client'
import { createContext, useState, useContext, ReactNode } from 'react'

interface LanguageContextProps {
	language: string
	changeLanguage: (newLanguage: string) => void
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
	undefined
)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [language, setLanguage] = useState('en')

	const changeLanguage = (newLanguage: string) => {
		setLanguage(newLanguage)
	}

	const contextValue: LanguageContextProps = {
		language,
		changeLanguage,
	}

	return (
		<LanguageContext.Provider value={contextValue}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => {
	const context = useContext(LanguageContext)

	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}

	return context
}
