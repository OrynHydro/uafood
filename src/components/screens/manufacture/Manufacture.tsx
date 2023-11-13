'use client'
import { FC } from 'react'
import s from './manufacture.module.scss'
import { ManufactureData, ManufactureDataEn } from '@/helpers/manufacture.data'
import Image from 'next/image'
import useLanguage from '@/hooks/useLanguage'

const Manufacture: FC = () => {
	const systemLanguage = useLanguage()
	return (
		<div className={s.manufacture}>
			<div className={s.banner}>
				<span className={s.text}>
					{systemLanguage === 'ru-RU' || systemLanguage === 'uk-UA'
						? 'Наше виробництво'
						: 'Our manufacture'}
				</span>
			</div>
			<main>
				<ul className={s.textBlock}>
					{systemLanguage === 'ru-RU' || systemLanguage === 'uk-UA'
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
