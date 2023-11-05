import { FC } from 'react'
import s from './products.module.scss'
import { ProductsData } from '@/helpers/products.data'
import Product from '@/components/ui/product/Product'
import Link from 'next/link'
import Image from 'next/image'

const Products: FC = () => {
	return (
		<div className={s.products}>
			<div className={s.left}>
				<div className={s.textBlock}>Our production</div>
			</div>
			<div className={s.right}>
				<div className={s.productsBlock}>
					{ProductsData.map(item => (
						<Product
							key={item.id}
							id={item.id}
							title={item.title}
							image={item.image}
							varieties={item.varieties}
						/>
					))}
				</div>
				<div className={s.more}>
					<Link href='/products/all' className={s.link}>
						More
					</Link>
					<Image
						className={s.leaf}
						width={200}
						src={'/images/img/productsLeaf.png'}
						height={200}
						alt=''
					/>
				</div>
			</div>
		</div>
	)
}
export default Products
