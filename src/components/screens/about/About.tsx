import { FC } from 'react'
import s from './about.module.scss'
import Image from 'next/image'
import { metadata } from '@/app/layout'

const About: FC = () => {
	// metadata.title = 'Uafood | About'
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
						The company LLC "UAFOOD UKRAINE" employs people who know a lot how
						produce best quality frozen berries, because they have long
						experience in the field of processing and logistics of frozen foods.
					</li>
					<li className={s.text}>
						A specially equipped and accredited laboratory carries out
						microbiological and physico-chemical control and analysis of raw
						materials and finished products at each stage of the production
						process. We do our best to maintain the high quality of our
						products.
					</li>
					<li className={s.text}>
						Our clients are the largest manufacturing companies, leaders in the
						European, North America and Middle East markets. Understanding that
						our product gets on the table to the end consumer the quality always
						remains under a magnifying glass. The measure of our success is our
						customer achievement.
					</li>
				</ul>
			</div>
		</div>
	)
}
export default About
