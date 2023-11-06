import s from './error-text.module.scss'
import { FaTimesCircle } from 'react-icons/fa'
import { FC } from 'react'

const ErrorText: FC<
	React.HTMLAttributes<HTMLDivElement> & { children: string | undefined }
> = ({ children, ...rest }) => {
	return (
		<>
			{children && (
				<div className={s.error} {...rest}>
					<FaTimesCircle
						style={{ marginRight: '10px' }}
						color='white'
						size={32}
					/>
					<p>{children}</p>
				</div>
			)}
		</>
	)
}

export default ErrorText
