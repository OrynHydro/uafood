'use client'
import { FC } from 'react'
import s from './contacts.module.scss'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TContactSchema, contactSchema } from '@/libs/schemas/contact.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Field from '@/components/ui/field/Field'
import Link from 'next/link'

const Contacts: FC = () => {
	const {
		register: formRegister,
		formState: { errors, isValid },
		handleSubmit,
		control,
	} = useForm<TContactSchema>({
		mode: 'onChange',
		resolver: zodResolver(contactSchema),
	})

	const onSubmit: SubmitHandler<TContactSchema> = data => {
		console.log(data)
	}
	return (
		<div className={s.contacts}>
			<div className={s.left}>
				<div className={s.textBlock}>Contact us</div>
			</div>

			<div className={s.right}>
				<div className={s.content}>
					<h1 className={s.title}>
						You can fill this form and we will contact you as soon as possible
					</h1>
					<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...formRegister('name')}
							label='Name'
							error={errors.name?.message}
							type='text'
							required
						/>
						<Field
							{...formRegister('email')}
							label='Email'
							error={errors.email?.message}
							type='email'
							required
						/>
						<Field
							{...formRegister('message')}
							label='Message'
							error={errors.message?.message}
							type='text'
							control={control}
						/>
						<button disabled={!isValid} className={s.button} type='submit'>
							Submit
						</button>
					</form>
					<h2 className={s.preTitle}>or you can contact us by yourself</h2>
					<div className={s.contactsBlock}>
						<div className={s.data}>
							<strong>Address</strong>
							<br />
							Building 37, Shevchenko Street,
							<br />
							Dnipro City, Dnipropetrovsk Region,
							<br />
							Ukraine, 49044
						</div>
						<div className={s.data}>
							<strong>Phone number</strong>
							<br />
							<Link href='tel:+380689101099'>+380689101099</Link>
						</div>
						<div className={s.data}>
							<strong>Email</strong>
							<br />
							<Link href='mailto:SALES@UAFOOD.NET'>SALES@UAFOOD.NET</Link>
						</div>
					</div>
				</div>

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
