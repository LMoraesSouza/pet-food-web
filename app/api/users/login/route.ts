import { authConfig } from "@/app/configs/auth";
import { prisma } from "@/app/server/script";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        // Validate required fields
        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Check if email is verified
        if (!user.emailVerified) {
            return NextResponse.json({ error: "Please verify your email first" }, { status: 401 });
        }

        // Verify password
        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Generate access token
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                name: user.name
            },
            authConfig.jwt.secret,
            { expiresIn: 1 }
        );

        // Generate refresh token
        const refreshToken = jwt.sign(
            { id: user.id },
            authConfig.jwt.secret,
            { expiresIn: '7d' }
        );

        // Remove password from response
        const { ...userWithoutPassword } = user

        return NextResponse.json({
            user: userWithoutPassword,
            token,
            refreshToken
        }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Error during login" }, { status: 500 });
    }
}
