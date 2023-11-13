// LanguageMenu.tsx
import { FC, useState, useEffect } from 'react'
import s from './language-menu.module.scss'
import Image from 'next/image'

const LanguageMenu: FC<{ reversed?: boolean }> = ({ reversed }) => {
	const [currentLang, setCurrentLang] = useState<string>('uk')
	const systemLanguage = localStorage.getItem('language')

	useEffect(() => {
		setCurrentLang(systemLanguage === 'ua' ? 'ua' : 'en')
	}, [systemLanguage])

	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

	const handleLanguageSelect = (language: string) => {
		localStorage.setItem('language', language)
		setCurrentLang(language)
		document.location.reload()
		setIsDropdownOpen(false)
	}

	// Determine the dropdown direction based on the 'reversed' prop
	const dropdownDirectionClass = reversed ? s.dropdownReversed : s.dropdown

	return (
		<div className={s.menu}>
			<div
				className={
					reversed ? `${s.selectedLanguage} ${s.reversed}` : s.selectedLanguage
				}
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
			>
				<Image
					src={`/images/flags/${currentLang === 'ua' ? 'ua' : 'uk'}.svg`}
					width={40}
					height={40}
					alt=''
				/>
				{reversed && (
					<span>{currentLang === 'ua' ? 'Ukrainian' : 'English'}</span>
				)}

				<span className={s.chevron}>{isDropdownOpen ? '▲' : '▼'}</span>
			</div>

			{isDropdownOpen && (
				<div className={dropdownDirectionClass}>
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
						{reversed && (
							<span>{currentLang === 'ua' ? 'English' : 'Ukrainian'}</span>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default LanguageMenu
