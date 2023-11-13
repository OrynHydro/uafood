'use client'
import { useState, useEffect } from 'react'

const useLanguage = () => {
	const [systemLanguage, setSystemLanguage] = useState<string>('')

	useEffect(() => {
		setSystemLanguage(navigator.language || '')
	}, [])

	return systemLanguage
}

export default useLanguage
