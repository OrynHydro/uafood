import { z } from 'zod'

type ErrorMessages = {
	name: {
		short: string
		long: string
	}
	email: string
	message: {
		short: string
		long: string
	}
}

const storedLanguage =
	typeof window !== 'undefined' ? window.localStorage.getItem('language') : 'en'
const language = storedLanguage !== null ? storedLanguage : 'en'

const errorMessages: Record<string, ErrorMessages> = {
	en: {
		name: {
			short: 'Name is too short. Write at least 3 characters',
			long: 'Name is too long. Write at most 100 characters',
		},
		email: 'Email is not valid',
		message: {
			short: 'Message is too short. Write at least 3 characters',
			long: 'Message is too long. Write at most 200 characters',
		},
	},
	ua: {
		name: {
			short: "Ім'я занадто коротке. Напишіть щонайменше 3 символи",
			long: "Ім'я занадто довге. Напишіть не більше 100 символів",
		},
		email: 'Електронна адреса недійсна',
		message: {
			short: 'Повідомлення занадто коротке. Напишіть щонайменше 3 символи',
			long: 'Повідомлення занадто довге. Напишіть не більше 200 символів',
		},
	},
}

export const contactSchema = z.object({
	name: z
		.string()
		.min(3, {
			message: errorMessages[language].name.short,
		})
		.max(100, {
			message: errorMessages[language].name.long,
		}),
	email: z.string().email({
		message: errorMessages[language].email,
	}),
	message: z
		.string()
		.min(3, {
			message: errorMessages[language].message.short,
		})
		.max(200, {
			message: errorMessages[language].message.long,
		}),
})

export type TContactSchema = z.infer<typeof contactSchema>
