import * as z from "zod";

export const SingInSchema = z.object({
    email: z.string().min(1, 'email or username is required'),
    password: z.string().min(6, "Password is required")
})

export type ISingInSchema = z.infer<typeof SingInSchema>