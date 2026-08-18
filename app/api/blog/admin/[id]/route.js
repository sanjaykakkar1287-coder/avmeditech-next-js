import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/Schema/Blog";


// =========================================
// GET SINGLE BLOG FOR ADMIN
// =========================================

export async function GET(request, { params }) {
    try {
        await connectDB();

        const { id } = await params;

        const blog = await Blog.findById(id).lean();

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
        console.error("Get Admin Blog Error:", error);

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


// =========================================
// UPDATE BLOG
// =========================================

export async function PUT(request, { params }) {
    try {
        await connectDB();

        const { id } = await params;

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


        // Required fields

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


        // Check duplicate slug

        const existingBlog = await Blog.findOne({
            slug,
            _id: {
                $ne: id,
            },
        });

        if (existingBlog) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "A blog with this slug already exists",
                },
                {
                    status: 409,
                }
            );
        }


        // Update

        const blog = await Blog.findByIdAndUpdate(
            id,
            {
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
            },
            {
                new: true,
                runValidators: true,
            }
        );


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
                message: "Blog updated successfully",
                data: blog,
            },
            {
                status: 200,
            }
        );

    } catch (error) {
        console.error("Update Blog Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to update blog",
            },
            {
                status: 500,
            }
        );
    }
}
// =========================================
// DELETE BLOG
// =========================================

export async function DELETE(request, { params }) {
    try {
        await connectDB();

        const { id } = await params;

        const blog = await Blog.findByIdAndDelete(id);

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
                message: "Blog deleted successfully",
            },
            {
                status: 200,
            }
        );

    } catch (error) {
        console.error(
            "Delete Blog Error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message: "Failed to delete blog",
            },
            {
                status: 500,
            }
        );
    }
}