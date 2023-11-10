'use client'
import { FC, useEffect } from 'react'
import s from './alert.module.scss'
import { AiOutlineClose } from 'react-icons/ai'

interface AlertProps {
	message: string
	onClose: () => void
	submissionSuccess: boolean
}

const Alert: FC<AlertProps> = ({ message, onClose, submissionSuccess }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			onClose()
		}, 5000)

		return () => clearTimeout(timeout)
	}, [onClose])

	return (
		<div className={submissionSuccess ? `${s.alert} ${s.visible}` : s.alert}>
			<p>{message}</p>
			<button onClick={onClose}>
				<AiOutlineClose />
			</button>
		</div>
	)
}

export default Alert
