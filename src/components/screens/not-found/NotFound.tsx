import { FC } from 'react'
import s from './not-found.module.scss'
import Link from 'next/link'

const NotFoundPage: FC = () => {
	const language = localStorage.getItem('language')
	return (
		<div className={s.notFound}>
			<h1>
				{language === 'ua'
					? '404 - Сторінка не знайдена'
					: '404 - Page Not Found'}
			</h1>
			<span>
				{language === 'ua'
					? 'Сторінку, яку ви шукаєте, не вдалося знайти. Будь ласка, перевірте URL-адресу або поверніться на'
					: 'The page you are looking for could not be found. Please check the URL or go back to the'}{' '}
				<strong>
					<Link href='/'>{language === 'ua' ? 'головну' : 'homepage'}</Link>
				</strong>
				.
			</span>
		</div>
	)
}
export default NotFoundPage
