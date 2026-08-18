import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/Schema/Blog";

export async function POST(request) {
    try {
        await connectDB();

        const body = await request.json();

        const {
            title,
            slug,
            image,
            category,
            date,
            author,
            excerpt,
            content,
            tags,
            isPublished,
        } = body;

        
        if (
            !title ||
            !slug ||
            !category ||
            !author ||
            !excerpt ||
            !content
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Required fields are missing",
                },
                {
                    status: 400,
                }
            );
        }

       
        const existingBlog = await Blog.findOne({
            slug,
        });

        if (existingBlog) {
            return NextResponse.json(
                {
                    success: false,
                    message: "A blog with this slug already exists",
                },
                {
                    status: 409,
                }
            );
        }

       
        const blog = await Blog.create({
            title,
            slug,
            image: image || "",
            category,
            date: date || new Date(),
            author,
            excerpt,
            content,
            tags: tags || [],
            isPublished:
                isPublished !== undefined
                    ? isPublished
                    : true,
        });

        return NextResponse.json(
            {
                success: true,
                message: "Blog created successfully",
                data: blog,
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        console.error("Create Blog Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to create blog",
            },
            {
                status: 500,
            }
        );
    }
}


// GET ALL BLOGS
export async function GET() {
    try {
        await connectDB();

        const blogs = await Blog.find()
            .sort({ date: -1 })
            .lean();

        return NextResponse.json(
            {
                success: true,
                count: blogs.length,
                data: blogs,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("Get Blogs Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch blogs",
            },
            {
                status: 500,
            }
        );
    }
}