'use client'
import { FC } from 'react'
import s from './footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import useLanguage from '@/hooks/useLanguage'

const Footer: FC = () => {
	const systemLanguage = localStorage.getItem('language')
	return (
		<div className={s.footer}>
			<Image
				className={s.image}
				src={'/images/img/aboutRight.png'}
				width={600}
				height={420}
				alt=''
			/>
			<div className={s.wrapper}>
				<div className={s.container}>
					<div className={s.logo}>
						<Image
							src={'/images/logo/logoImgFooter.png'}
							width={148}
							height={153}
							alt=''
						/>
						<Image
							src={'/images/logo/logoTextFooter.png'}
							width={253}
							height={92}
							alt=''
						/>
					</div>
					<ul className={s.contacts}>
						<li className={s.item}>
							<span>{systemLanguage === 'ua' ? 'адреса' : 'address'}</span>
							<span className={s.content}>
								{systemLanguage === 'ua'
									? 'вул. Шевченка, буд. 37, м. Дніпро, Дніпропетровська область, Україна, 49044'
									: 'Building 37, Shevchenko Street, Dnipro City, Dnipropetrovsk Region, Ukraine, 49044'}
							</span>
						</li>
						<li className={s.item}>
							<span>{systemLanguage === 'ua' ? 'контакти' : 'contacts'}</span>
							<span className={s.content}>
								{systemLanguage === 'ua'
									? 'Тел. +380689101099 Ел.пошта: SALES@UAFOOD.NET'
									: 'Tel. +380689101099 email: SALES@UAFOOD.NET'}
							</span>
						</li>
						<li className={s.item}>
							<span className={s.github}>
								{systemLanguage === 'ua'
									? 'Сайт розроблений'
									: 'Website made by'}{' '}
								<Link href='https://github.com/OrynHydro' target='_blank'>
									orynhydro
								</Link>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Footer
