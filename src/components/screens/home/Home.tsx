import { FC } from 'react'
import s from './home.module.scss'
import Image from 'next/image'
import { metadata } from '@/app/layout'

const Home: FC = () => {
	// metadata.title = 'Uafood | Home'
	return (
		<>
			<div className={s.background}>
				<h1 className={s.title}>Nature's bountry, frozen in time</h1>
			</div>
			<div className={s.bottom}>
				<Image
					className={s.bottomLeft}
					src={'/images/img/homeBottomLeft.svg'}
					width={1660}
					height={1473}
					alt=''
				/>
				<div className={s.triangle} />
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
