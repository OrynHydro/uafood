import { InputHTMLAttributes, forwardRef } from 'react'
import s from './field.module.scss'
import ErrorText from './error-text/ErrorText'
import { Control, Controller } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'

interface IField
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	label?: string
	error?: string
	required?: boolean
	control?: Control<any>
}

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
				<h1 className={s.title}>
					{label}
					{required && <span> *</span>}
				</h1>
			</label>
			{label === 'Message' ? (
				<Controller
					name='message'
					control={control}
					render={({ field }) => (
						<TextareaAutosize className={s.input} {...field} maxLength={200} />
					)}
				/>
			) : (
				<input className={s.input} {...rest} ref={ref} />
			)}

			<ErrorText>{error}</ErrorText>
		</div>
	)
})
export default Field
