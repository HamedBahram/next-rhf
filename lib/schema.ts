import { z } from 'zod'

export const FormDataSchema = z.object({
  name: z.string().nonempty('Name is required.'),
  message: z
    .string()
    .nonempty('Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' })
})
