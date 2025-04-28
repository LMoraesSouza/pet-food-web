import { prisma } from "@/app/server/script";
import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto';
import bcrypt from "bcryptjs";
import { sendEmail } from "@/app/server/utils";

export async function POST(req: NextRequest) {

    try {
        const { email, password, name } = await req.json();

        // Validate required fields
        if (!email || !password || !name) {
            return NextResponse.json({ error: "All field are required" }, { status: 500 });
        }
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })
        console.log(req.body)

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 500 });
        }

        // Generate linking code
        let linkingCode;
        let isUnique = false;
        while (!isUnique) {
            linkingCode = generateLinkingCode();
            const existingCode = await prisma.user.findUnique({
                where: { linkingCode }
            });
            if (!existingCode) {
                isUnique = true;
            }
        }

        // Generate email verification token
        const emailVerificationToken = crypto.randomBytes(32).toString('hex')

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create new user
        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                linkingCode,
                emailVerificationToken,
                emailVerified: false
            }
        })

        // Send verification email
        try {
            await sendEmail(
                email,
                'verificationEmail',
                emailVerificationToken
            )
        } catch (emailError) {
            console.error('Error sending verification email:', emailError)
            // Don't reject the user creation if email fails
        }

        // TODO: Send verification email
        // For now, we'll just return the token in the response

        return NextResponse.json({
            email,
            password,
            name,
            linkingCode,
            emailVerificationToken,
            emailVerified: false
        }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Error creating user" }, { status: 500 });
    }
}


function generateLinkingCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const generateSection = () => {
        let section = '';
        for (let i = 0; i < 4; i++) {
            section += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return section;
    };
    return `${generateSection()}-${generateSection()}`;
}