import { FC } from 'react'
import s from './header.module.scss'
import Image from 'next/image'
import { HeaderNavbarData } from '@/helpers/header-navbar.data'
import Link from 'next/link'

const Header: FC = () => {
	return (
		<div className={s.header}>
			<div className={s.wrapper}>
				<div className={s.container}>
					<Link href={'/'} className={s.left}>
						<Image
							className={s.logoImg}
							src='/images/logo/logoimg.svg'
							width={70}
							height={73}
							alt=''
						/>
						<Image
							className={s.logoText}
							src='/images/logo/logoText.svg'
							width={191}
							height={69}
							alt=''
						/>
					</Link>
					<nav className={s.right}>
						{HeaderNavbarData.map(item => (
							<Link key={item.id} href={item.link} className={s.link}>
								{item.title}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</div>
	)
}
export default Header
