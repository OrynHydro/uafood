'use client'
import { FC, useState, useEffect } from 'react'
import s from './language-menu.module.scss'
import Image from 'next/image'

const LanguageMenu: FC = () => {
	const [currentLang, setCurrentLang] = useState<string>('uk')
	const systemLanguage = localStorage.getItem('language')

	useEffect(() => {
		setCurrentLang(systemLanguage === 'ua' ? 'ua' : 'en')
	}, [systemLanguage])

	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

	const handleLanguageSelect = (language: string) => {
		localStorage.setItem('language', language)
		setCurrentLang(language)
		setIsDropdownOpen(false)
	}

	return (
		<div className={s.menu}>
			<div
				className={s.selectedLanguage}
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
			>
				<Image
					src={`/images/flags/${currentLang === 'ua' ? 'ua' : 'uk'}.svg`}
					width={40}
					height={40}
					alt=''
				/>
				<span className={s.chevron}>{isDropdownOpen ? '▲' : '▼'}</span>
			</div>

			{isDropdownOpen && (
				<div className={s.dropdown}>
					<div
						className={s.item}
						onClick={() =>
							handleLanguageSelect(currentLang === 'ua' ? 'en' : 'ua')
						}
					>
						<Image
							src={`/images/flags/${currentLang === 'ua' ? 'uk' : 'ua'}.svg`}
							width={40}
							height={40}
							alt=''
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default LanguageMenu
