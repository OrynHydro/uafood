import { InputHTMLAttributes, forwardRef } from 'react'
import s from './field.module.scss'
import ErrorText from './error-text/ErrorText'
import { Control, Controller } from 'react-hook-form'
import { z } from 'zod'

interface IField
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	label?: string
	error?: string
	required?: boolean
	control?: Control<any>
}

const schema = z.object({
	textareaField: z.string().min(5, 'Минимальная длина - 5 символов'),
})

interface IField
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	label?: string
	error?: string
	required?: boolean
	control?: Control<any>
}

const Field = forwardRef<HTMLInputElement, IField>(function Comp(
	{ label, error, required, control, ...rest },
	ref
) {
	return (
		<div className={s.field}>
			<label>
				<h1 className={s.title}>{label}</h1>
			</label>
			{label === 'Message' ? (
				<Controller
					name='textareaField'
					control={control}
					render={({ field }) => <textarea className={s.input} {...field} />}
				/>
			) : (
				<input className={s.input} {...rest} ref={ref} />
			)}

			<ErrorText>{error}</ErrorText>
		</div>
	)
})
export default Field
