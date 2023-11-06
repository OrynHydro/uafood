import { FC } from 'react'
import s from './contacts.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Contacts: FC = () => {
	return (
		<div className={s.contacts}>
			<div className={s.left}>
				<div className={s.textBlock}>Contact us</div>
			</div>
			<div className={s.right}>
				<Image
					className={s.leaf}
					width={200}
					src={'/images/img/productsLeaf.png'}
					height={200}
					alt=''
				/>
			</div>
		</div>
	)
}
export default Contacts
