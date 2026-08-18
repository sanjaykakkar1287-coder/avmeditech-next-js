import { NextResponse } from "next/server";

import { cookies } from "next/headers";

import User from "@/Schema/Users";
import { connectDB } from "@/lib/db";

export async function GET() {
    try {
        await connectDB();

        const cookieStore = await cookies();

        const session = cookieStore.get("admin_session");

        if (!session) {
            return NextResponse.json(
                {
                    success: false,
                    authenticated: false,
                    message: "Not authenticated",
                },
                {
                    status: 401,
                }
            );
        }

        const user = await User.findById(
            session.value
        ).select("-password");

        if (!user || !user.isActive) {
            return NextResponse.json(
                {
                    success: false,
                    authenticated: false,
                    message: "Invalid session",
                },
                {
                    status: 401,
                }
            );
        }

        return NextResponse.json(
            {
                success: true,
                authenticated: true,
                user: {
                    id: user._id,
                    username: user.username,
                    role: user.role,
                },
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("Auth Check Error:", error);

        return NextResponse.json(
            {
                success: false,
                authenticated: false,
                message: "Authentication check failed",
            },
            {
                status: 500,
            }
        );
    }
}