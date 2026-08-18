import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/Schema/Blog";

export async function GET(request, { params }) {
    try {
        await connectDB();

        const { slug } = await params;

        const blog = await Blog.findOne({
            slug: slug,
            isPublished: true,
        }).lean();

        if (!blog) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Blog not found",
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json(
            {
                success: true,
                data: blog,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("Get Single Blog Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch blog",
            },
            {
                status: 500,
            }
        );
    }
}