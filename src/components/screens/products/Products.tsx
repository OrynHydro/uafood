import { FC } from 'react'
import s from './products.module.scss'
import { ProductsData } from '@/helpers/products.data'
import Product from '@/components/ui/product/Product'
import Image from 'next/image'
import { metadata } from '@/app/layout'

const Products: FC = () => {
	// metadata.title = 'Uafood | Products'
	return (
		<div className={s.page}>
			<h1 className={s.title}>Our products</h1>
			<main>
				<div className={s.products}>
					{ProductsData.map(product => (
						<Product
							id={product.id}
							desc={product.desc}
							image={product.image}
						/>
					))}
				</div>
				<Image
					className={s.leaves}
					src='/images/img/productsRight.svg'
					width={665}
					height={1038}
					alt=''
				/>
			</main>
		</div>
	)
}
export default Products
