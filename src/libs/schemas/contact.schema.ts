import { z } from 'zod'

export const contactSchema = z.object({
	name: z
		.string()
		.min(3, {
			message: 'Name is too short. Write at least 3 characters',
		})
		.max(100, {
			message: 'Name is too long. Write at most 100 characters',
		}),
	email: z.string().email({
		message: 'Email is not valid',
	}),
	message: z
		.string()
		.min(3, {
			message: 'Message is too short. Write at least 3 characters',
		})
		.max(200, {
			message: 'Message is too long. Write at most 200 characters',
		}),
})

export type TContactSchema = z.infer<typeof contactSchema>
