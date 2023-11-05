import { FC } from 'react'
import s from './not-found.module.scss'
import Link from 'next/link'

const NotFoundPage: FC = () => {
	return (
		<div className={s.notFound}>
			<h1>404 - Page Not Found</h1>
			<span>
				The page you are looking for could not be found. Please check the URL or
				go back to the{' '}
				<strong>
					<Link href='/'>homepage</Link>
				</strong>
				.
			</span>
		</div>
	)
}
export default NotFoundPage
