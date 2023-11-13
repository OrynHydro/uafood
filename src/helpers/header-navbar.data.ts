import { IHeaderNavbar } from '@/interfaces/header-navbar.interface'

export const HeaderNavbarData: IHeaderNavbar[] = [
	{
		id: 1,
		title: 'Головна',
		link: '/',
	},
	{
		id: 2,
		title: 'Про нас',
		link: '/about',
	},
	{
		id: 3,
		title: 'Продукція',
		link: '/products',
	},
	{
		id: 4,
		title: 'Виробництво',
		link: '/manufacture',
	},
	{
		id: 5,
		title: 'Контакти',
		link: '/contacts',
	},
]

export const HeaderNavbarDataEn: IHeaderNavbar[] = [
	{
		id: 1,
		title: 'home',
		link: '/',
	},
	{
		id: 2,
		title: 'about',
		link: '/about',
	},
	{
		id: 3,
		title: 'products',
		link: '/products',
	},
	{
		id: 4,
		title: 'manufacture',
		link: '/manufacture',
	},
	{
		id: 5,
		title: 'contacts',
		link: '/contacts',
	},
]
