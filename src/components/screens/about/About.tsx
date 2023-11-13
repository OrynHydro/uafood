'use client'
import { FC } from 'react'
import s from './about.module.scss'
import Image from 'next/image'
import { en } from './../../../locales/en'
import { uk } from './../../../locales/uk'
import useLanguage from '@/hooks/useLanguage'

const About: FC = () => {
	const systemLanguage = useLanguage()
	return (
		<div className={s.about}>
			<div className={s.container}>
				<Image
					className={s.imageLeft}
					src={'/images/img/aboutLeft.svg'}
					width={1000}
					height={900}
					alt=''
				/>
				<ul className={s.textList}>
					<li className={s.text}>
						{systemLanguage === 'ru-RU' || systemLanguage === 'uk-UA'
							? uk.about.text1
							: en.about.text1}
					</li>
					<li className={s.text}>
						{systemLanguage === 'ru-RU' || systemLanguage === 'uk-UA'
							? uk.about.text2
							: en.about.text2}
					</li>
					<li className={s.text}>
						{systemLanguage === 'ru-RU' || systemLanguage === 'uk-UA'
							? uk.about.text3
							: en.about.text3}
					</li>
				</ul>
			</div>
		</div>
	)
}
export default About
