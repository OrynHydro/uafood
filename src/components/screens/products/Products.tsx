'use client'
import { FC } from 'react'
import s from './products.module.scss'
import { ProductsData, ProductsDataEn } from '@/helpers/products.data'
import Product from '@/components/ui/product/Product'
import Image from 'next/image'

const Products: FC = () => {
	let language = 'en'

	if (typeof window !== 'undefined' && window.localStorage !== undefined) {
		language = localStorage.getItem('language') || language
	}
	return (
		<div className={s.page}>
			<h1 className={s.title}>
				{language === 'ua' ? 'Наша продукція' : 'Our production'}
			</h1>
			<main>
				<div className={s.products}>
					{language === 'ua'
						? ProductsData.map(product => (
								<Product
									id={product.id}
									desc={product.desc}
									image={product.image}
								/>
						  ))
						: ProductsDataEn.map(product => (
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
