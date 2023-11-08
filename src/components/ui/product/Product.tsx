import { IProducts } from '@/interfaces/products.interface'
import { FC } from 'react'
import s from './product.module.scss'
import Image from 'next/image'

const Product: FC<IProducts> = ({ desc, image }) => {
	return (
		<div className={s.product}>
			<div className={s.textBlock}>
				{desc.map((item, index) => (
					<span className={s.text} key={index}>
						{item}
					</span>
				))}
			</div>
			<Image
				className={s.image}
				src={`/images/img/products/${image}`}
				width={180}
				height={180}
				alt=''
			/>
		</div>
	)
}
export default Product
