'use client'
import { FC, useEffect, useState } from 'react'
import s from './manufacture.module.scss'
import { ManufactureData, ManufactureDataEn } from '@/helpers/manufacture.data'
import Image from 'next/image'
import useLanguage from '@/hooks/useLanguage'

const Manufacture: FC = () => {
	const [currentLang, setCurrentLang] = useState<string>('uk')
	const systemLanguage = localStorage.getItem('language')

	useEffect(() => {
		setCurrentLang(systemLanguage === 'ua' ? 'ua' : 'en')
	}, [systemLanguage])
	return (
		<div className={s.manufacture}>
			<div className={s.banner}>
				<span className={s.text}>
					{currentLang === 'ua' ? 'Наше виробництво' : 'Our manufacture'}
				</span>
			</div>
			<main>
				<ul className={s.textBlock}>
					{currentLang === 'ua'
						? ManufactureData.map(item => (
								<li key={item.id}>
									<h2>{item.title}</h2>
									<span>{item.text}</span>
								</li>
						  ))
						: ManufactureDataEn.map(item => (
								<li key={item.id}>
									<h2>{item.title}</h2>
									<span>{item.text}</span>
								</li>
						  ))}
				</ul>
				<div className={s.images}>
					<Image
						className={s.image1}
						src={'/images/img/manufacture1.svg'}
						width={264}
						height={237}
						alt=''
					/>
					<Image
						className={s.image2}
						src={'/images/img/manufacture2.svg'}
						width={211}
						height={281}
						alt=''
					/>
					<Image
						className={s.image3}
						src={'/images/img/manufacture3.svg'}
						width={266}
						height={199}
						alt=''
					/>
				</div>
			</main>
		</div>
	)
}
export default Manufacture
