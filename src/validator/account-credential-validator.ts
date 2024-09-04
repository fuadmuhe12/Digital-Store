import { z } from "zod";

export const AuthCredentialVaidator = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6)
});
export type TAuthCredentialVaidator = z.infer<typeof AuthCredentialVaidator>
