import { FC } from 'react'
import s from './manufacture.module.scss'
import { ManufactureData } from '@/helpers/manufacture.data'
import Image from 'next/image'
import { metadata } from '@/app/layout'

const Manufacture: FC = () => {
	// metadata.title = 'Uafood | Manufacture'
	return (
		<div className={s.manufacture}>
			<div className={s.banner}>
				<span className={s.text}>Our manufacture</span>
			</div>
			<main>
				<ul className={s.textBlock}>
					{ManufactureData.map(item => (
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
