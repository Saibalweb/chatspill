import {z} from 'zod';
export const userNameValidation = z
        .string()
        .min(3,"Username must be atleast 3 characters")
        .max(20,"Username must be no more than 20 characters")
        .regex(/^[a-zA-Z][a-zA-Z0-9_]*$/,"Username must start with letter and must not contain any special");
export const signUpSchmea = z.object({
    username: userNameValidation,
    email:z.string().email({message:"Please Enter Valid email address"}),
    password: z.string().min(6,{message:"password should be atleast 6 length character"}),
    profileImg: z.string().optional(),
    aboutUser:z.string().optional(),
})