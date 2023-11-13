'use client'
import { FC, useEffect, useState } from 'react'
import s from './header.module.scss'
import Image from 'next/image'
import {
	HeaderNavbarData,
	HeaderNavbarDataEn,
} from '@/helpers/header-navbar.data'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import useLanguage from '@/hooks/useLanguage'
import LanguageMenu from '@/components/ui/language-menu/LanguageMenu'

const Header: FC = () => {
	const systemLanguage = localStorage.getItem('language')
	const [activeMenu, setActiveMenu] = useState<boolean>(false)

	useEffect(() => {
		if (activeMenu) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'initial'
		}
	}, [activeMenu])

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
						<LanguageMenu />
						{systemLanguage === 'ua'
							? HeaderNavbarData.map(item => (
									<Link key={item.id} href={item.link} className={s.link}>
										{item.title}
									</Link>
							  ))
							: HeaderNavbarDataEn.map(item => (
									<Link key={item.id} href={item.link} className={s.link}>
										{item.title}
									</Link>
							  ))}
					</nav>

					<div className={s.menu}>
						<div className={s.burger} onClick={() => setActiveMenu(true)}>
							<GiHamburgerMenu />
						</div>
						<div
							className={activeMenu ? `${s.overlay} ${s.active}` : s.overlay}
							onClick={() => setActiveMenu(false)}
						></div>
						<div
							className={
								activeMenu ? `${s.rightMenu} ${s.active}` : s.rightMenu
							}
						>
							<nav className={s.nav}>
								{systemLanguage === 'ua'
									? HeaderNavbarData.map(item => (
											<Link key={item.id} href={item.link} className={s.link}>
												{item.title}
											</Link>
									  ))
									: HeaderNavbarDataEn.map(item => (
											<Link key={item.id} href={item.link} className={s.link}>
												{item.title}
											</Link>
									  ))}
							</nav>
							<div className={s.bottom}>
								<LanguageMenu reversed />
								<button
									className={s.close}
									onClick={() => setActiveMenu(false)}
								>
									{systemLanguage === 'ua' ? 'Закрити' : 'Close'}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Header
