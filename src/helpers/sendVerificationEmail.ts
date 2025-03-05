import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(email:string,username:string,verificationCode:string):Promise<ApiResponse>{
    try {
        const { data, error } = await resend.emails.send({
            from: '<onboarding@resend.dev>',
            to: email,
            subject: 'Chatspill | Verification Code',
            react: VerificationEmail({ verificationCode,username}),
          });
        return{
            success:true,
            message:"Verification Code sent Successfully"
        }
    } catch (error) {
        console.error("Error happened sending verification Email",error);
        return{success:false,message:"Failed to Send Verification Email"}
    }
}