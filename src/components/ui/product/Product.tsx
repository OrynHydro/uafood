import { IProducts } from '@/interfaces/products.interface'
import { FC } from 'react'
import s from './product.module.scss'
import Image from 'next/image'

const Product: FC<IProducts> = ({ title, image, varieties, id }) => {
	return (
		<div
			className={s.product}
			style={{ flexDirection: id % 2 === 0 ? 'row-reverse' : 'row' }}
		>
			<Image
				className={s.image}
				src={`/images/img/products/${image}`}
				width={image === 'blueberry.svg' ? 320 : 180}
				height={image === 'blueberry.svg' ? 271 : 142}
				alt=''
			/>
			<div className={s.textBlock}>
				<span className={s.title}>{title}</span>
				<span className={s.varieties}>Varieties: {varieties.join(', ')}</span>
			</div>
		</div>
	)
}
export default Product
