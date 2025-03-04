import { z } from "zod";

export const logInSchema = z.object({
    identifier: z.string().email(),
    password: z.string().min(8),
});
