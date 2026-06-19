import { eq } from "drizzle-orm";
import { db } from "../../config/db";
import { users } from "../../drizzle/schema";
import { ApiError } from "../../utils/apiError";
import { comparePassword, hashPassword } from "../../utils/hash";
import { generateToken } from "../../utils/jwt";
import { sendMail } from "../../utils/sendMail";
import { emailTemplates } from "../../templates/emailTemplates";
import { generateOtp } from "../../utils/otp";
import { RegisterInput,LoginInput } from "../../../../shared/schemas/auth.schema";

export const authService = {
    register: async (userData: RegisterInput) => {
        const { name, username, email, phoneNumber, password } = userData;
        try {
            const [isUsernameExist] = await db.select().from(users).where(eq(users.username, username))
            if (isUsernameExist) {
                throw new ApiError(400, "Username already exists")
            }

            const [isEmailExist] = await db.select().from(users).where(eq(users.email, email))
            if (isEmailExist) {
                throw new ApiError(400, "Email already exists")
            }

            if (phoneNumber) {
                const [isPhoneExist] = await db
                  .select()
                  .from(users)
                  .where(eq(users.phoneNumber, phoneNumber));
              
                if (isPhoneExist) {
                  throw new ApiError(400, "Phone already exists");
                }
              }
            const hashedPassword = await hashPassword(password)
            const otp = generateOtp()
            const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

            const [newUser] = await db.insert(users).values({
                name,
                username,
                email,
                phoneNumber,
                password: hashedPassword,
                otp,
                otpExpiry
            }).returning()

            if (newUser) {


                const { subject, html } = emailTemplates.welcomeOtp(newUser.name, otp);

                await sendMail(newUser.email, subject, html);

                return {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    phoneNumber: newUser.phoneNumber,
                    role: newUser.role,
                    verified: newUser.verified,
                    token: generateToken({
                        userId: newUser.id,
                        email: newUser.email,
                        role: newUser.role
                    })
                }
            } else {
                throw new ApiError(500, "Failed to create user")
            }




        } catch (error) {
            console.log("register error: ", error);

            throw error;

        }
    },

    login: async (userData: LoginInput) => {
        try {
            const { email, password } = userData;
            const [user] = await db.select().from(users).where(eq(users.email, email))
            if (!user) {
                throw new ApiError(404, "Incorrect email or password")
            }

            const isPasswordMatch = await comparePassword(password, user.password)
            if (!isPasswordMatch) {
                throw new ApiError(404, "Incorrect email or password")
            }

            if (!user.verified) {
                throw new ApiError(403, "Please verify your email first")
            }

            return {
                id: user.id,
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                role: user.role,
                verified: user.verified,
                token: generateToken({
                    userId: user.id,
                    email: user.email,
                    role: user.role
                })
            }

        } catch (error) {
            console.log("login error: ", error);
            throw error;

        }
    },

    getUsers: async () => {
        try {
            const allUsers = await db.select({
                id: users.id,
                name: users.name,
                email: users.email,
                phoneNumber: users.phoneNumber,
                role: users.role,
                verified: users.verified
            }).from(users)
            return allUsers
        } catch (error) {
            console.log("get users error: ", error);
            throw error;
        }
    },
    verifyEmail: async (email: string, otp: string) => {
        try {
            const [user] = await db.select().from(users).where(eq(users.email, email))
            if (!user) {
                throw new ApiError(404, "Invalid Email")
            }

            if (user.verified) {
                throw new ApiError(400, "Email already verified")
            }

            if (user.otp !== otp) {
                throw new ApiError(400, "Invalid OTP")
            }

            if (user.otpExpiry && user.otpExpiry < new Date()) {
                throw new ApiError(400, "OTP has expired")
            }

            await db.update(users).set({
                verified: true,
                otp: null,
                otpExpiry: null
            }).where(eq(users.id, user.id))

            const { subject, html } = emailTemplates.accountVerified(user.name);
            await sendMail(user.email, subject, html);

            return {
                message: "Email verified successfully"
            }
        } catch (error) {
            console.log("verify email error: ", error);
            throw error;
        }
    }


}


