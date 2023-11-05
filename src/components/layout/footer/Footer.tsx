import { FC } from 'react'
import s from './footer.module.scss'
import Image from 'next/image'

const Footer: FC = () => {
	return (
		<div className={s.footer}>
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
							<span>address</span>
							<span className={s.content}>
								Building 37, Shevchenko Street, Dnipro City, Dnipropetrovsk
								Region, Ukraine, 49044
							</span>
						</li>
						<li className={s.item}>
							<span>contacts</span>
							<span className={s.content}>
								Tel. +380689101099 Email: SALES@UAFOOD.NET
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Footer
