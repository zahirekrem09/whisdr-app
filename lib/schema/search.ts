import * as z from 'zod'
export const SearchFormSchema = z.object({
  country: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .optional(),
  category: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .optional(),

  date: z
    .object({
      from: z
        .date({
          required_error: 'A date of from is required.',
        })
        .optional(),
      to: z
        .date({
          required_error: 'A date of to is required.',
        })
        .optional(),
    })
    .optional(),
  hallmarks: z
    .array(z.string())
    // .refine(value => value.some(item => item), {
    //   message: 'You have to select at least one item.',
    // })
    .optional(),
})

export type SearchFormValues = z.infer<typeof SearchFormSchema>
