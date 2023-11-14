'use client'
import { FC, useState } from 'react'
import s from './contacts.module.scss'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TContactSchema, contactSchema } from '@/libs/schemas/contact.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Field from '@/components/ui/field/Field'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import Alert from '@/components/ui/alert/Alert'
import { en } from './../../../locales/en'
import { uk } from './../../../locales/uk'

const Contacts: FC = () => {
	const language = localStorage.getItem('language')
	const {
		register: formRegister,
		formState: { errors, isValid },
		handleSubmit,
		control,
		reset,
	} = useForm<TContactSchema>({
		mode: 'onChange',
		resolver: zodResolver(contactSchema),
	})

	const [loading, setLoading] = useState<boolean>(false)
	const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false)

	const onSubmit: SubmitHandler<TContactSchema> = data => {
		const templateParams = {
			...data,
			company_email: 'SALES@UAFOOD.NET',
		}

		setLoading(true)

		emailjs
			.send(
				'service_iigcgri',
				'template_g7xh9vm',
				templateParams,
				't8WwLokaiJvDV-f6A'
			)
			.then(() => {
				setLoading(false)
				reset()
				setSubmissionSuccess(true)
			})
	}

	const closeAlert = () => {
		setSubmissionSuccess(false)
	}
	return (
		<div className={s.contacts}>
			<div className={s.left}>
				<div className={s.textBlock}>
					<span>
						{language === 'ua' ? uk.contacts.title : en.contacts.title}
					</span>
				</div>
			</div>

			<div className={s.right}>
				<div className={s.content}>
					<h1 className={s.title}>
						{language === 'ua' ? uk.contacts.formTitle : en.contacts.formTitle}
					</h1>
					<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...formRegister('name')}
							label={
								language === 'ua' ? uk.contacts.input1 : en.contacts.input1
							}
							error={errors.name?.message}
							type='text'
							required
						/>
						<Field
							{...formRegister('email')}
							label={
								language === 'ua' ? uk.contacts.input2 : en.contacts.input2
							}
							error={errors.email?.message}
							type='email'
							required
						/>
						<Field
							{...formRegister('message')}
							label={
								language === 'ua' ? uk.contacts.input3 : en.contacts.input3
							}
							error={errors.message?.message}
							type='text'
							control={control}
							required
						/>
						<button
							disabled={!isValid}
							className={loading ? `${s.button} ${s.loading}` : s.button}
							type='submit'
						>
							<span>
								{language === 'ua' ? uk.contacts.button : en.contacts.button}
							</span>
						</button>
					</form>
					<h2 className={s.preTitle}>
						{language === 'ua' ? uk.contacts.preTitle : en.contacts.preTitle}
					</h2>
					<div className={s.contactsBlock}>
						<div className={s.data}>
							<strong>{language === 'ua' ? 'Адреса' : 'Address'}</strong>
							{language === 'ua' ? (
								<>
									<br />
									Будинок 37, вулиця Шевченка, місто Дніпро, Дніпропетровська
									область, Україна, 49044
									<br />
									місто Дніпро, Дніпропетровська область,
									<br />
									Україна, 49044
								</>
							) : (
								<>
									<br />
									Building 37, Shevchenko Street,
									<br />
									Dnipro City, Dnipropetrovsk Region,
									<br />
									Ukraine, 49044
								</>
							)}
						</div>
						<div className={s.data}>
							<strong>{language === 'ua' ? 'Телефон' : 'Phone number'}</strong>
							<br />
							<Link href='tel:+380689101099'>+380689101099</Link>
						</div>
						<div className={s.data}>
							<strong>
								{language === 'ua' ? 'Електронна пошта' : 'Email'}
							</strong>
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
			<Alert
				submissionSuccess={submissionSuccess}
				message='Thank you for your request. We will contact you soon.'
				onClose={closeAlert}
			/>
		</div>
	)
}
export default Contacts
