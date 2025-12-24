import * as z from "zod";


export const SingUpSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, 'email is required').email('Invalid email'),
    password: z.string().min(6, "Password must be at least 6 characters long").regex(/^(?=.*[a-z])(?=.*[A-Z]){8,}/, 'Password must contain at least one uppercase letter, one lowercase letter, one number'),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters long"),
    agreeTerms: z.boolean().refine((value) => value === true, {
        message: "You must agree to the terms and conditions",
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords and confirmPassword does not match",
    path: ["confirmPassword"],
})

export type ISingUpSchema = z.infer<typeof SingUpSchema>