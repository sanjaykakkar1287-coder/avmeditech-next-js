import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import User from "@/Schema/Users";
import { connectDB } from "@/lib/db";

export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();

        const { username, password } = body;

        // Validate input
        if (!username || !password) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Username and password are required",
                },
                {
                    status: 400,
                }
            );
        }

        // Find user
        const user = await User.findOne({
            username: username.toLowerCase().trim(),
        });

        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid username or password",
                },
                {
                    status: 401,
                }
            );
        }

        // Check active status
        if (!user.isActive) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Account is inactive",
                },
                {
                    status: 403,
                }
            );
        }

        // Check password
        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid username or password",
                },
                {
                    status: 401,
                }
            );
        }

        // Create authentication cookie
        const response = NextResponse.json(
            {
                success: true,
                message: "Login successful",
            },
            {
                status: 200,
            }
        );

        response.cookies.set("admin_session", user._id.toString(), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24,
        });

        return response;

    } catch (error) {
        console.error("Login Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong",
            },
            {
                status: 500,
            }
        );
    }
}