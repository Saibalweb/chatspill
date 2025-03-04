import { Types } from 'mongoose';
import {z} from 'zod';
export const objectIdSchema = z
            .string()
            .refine((val)=>{
                return Types.ObjectId.isValid(val);
            })
export const  messageSchema = z.object({
    sender: objectIdSchema,
    receiver: objectIdSchema,
    message: z.string().max(200,{message:"message can be max at 200 characters"}),
})