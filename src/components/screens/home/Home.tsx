'use client'
import { FC } from 'react'
import s from './home.module.scss'
import Image from 'next/image'
import { en } from './../../../locales/en'
import { uk } from './../../../locales/uk'
import useLanguage from '@/hooks/useLanguage'

const Home: FC = () => {
	const systemLanguage = useLanguage()
	return (
		<>
			<div className={s.background}>
				<h1 className={s.title}>
					{systemLanguage === 'ru-RU' || systemLanguage === 'uk-UA'
						? uk.home.banner
						: en.home.banner}
				</h1>
			</div>
			<div className={s.bottom}>
				<Image
					className={s.bottomLeft}
					src={'/images/img/homeBottomLeft.svg'}
					width={1660}
					height={1473}
					alt=''
				/>
				<div className={s.triangle}>
					<span>
						{systemLanguage === 'ru-RU' || systemLanguage === 'uk-UA'
							? uk.home.desc
							: en.home.desc}
					</span>
				</div>
				<Image
					className={s.bottomRight}
					src={'/images/img/homeBottomRight.png'}
					width={980}
					height={420}
					alt=''
				/>
			</div>
		</>
	)
}
export default Home
