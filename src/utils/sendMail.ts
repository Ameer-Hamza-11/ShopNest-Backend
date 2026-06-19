import nodeMailer from "nodemailer"
import { env } from "../config/config"


export const sendMail = async (to: string, subject: string, html: string) => {
    try {
        const transporter = nodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: env.userEmail,
                pass: env.userEmailPassword
            }
        })
        const mailOptions = {
            from: env.userEmail,
            to,
            subject,
            html
        }
        await transporter.verify();
        console.log("SMTP connected");
        await transporter.sendMail(mailOptions)

    } catch (error) {
        console.log("send mail error: ", error);
        throw error;

    }
}