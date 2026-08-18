"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddBlogPage() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        image: "",
        category: "",
        date: "",
        author: "",
        excerpt: "",
        content: "",
        tags: "",
        isPublished: true,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    // =========================================
    // HANDLE INPUT
    // =========================================

    const handleChange = (e) => {

        const { name, value, type, checked } =
            e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));

    };


    // =========================================
    // AUTO SLUG
    // =========================================

    const generateSlug = (value) => {

        return value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");

    };


    const handleTitleChange = (e) => {

        const title = e.target.value;

        setFormData((prev) => ({
            ...prev,
            title,
            slug: generateSlug(title),
        }));

    };


    // =========================================
    // SUBMIT
    // =========================================

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        setError("");
        setSuccess("");


        try {

            const tagsArray = formData.tags
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean);


            const payload = {

                title: formData.title.trim(),

                slug: formData.slug.trim(),

                image: formData.image.trim(),

                category: formData.category.trim(),

                date: formData.date
                    ? formData.date
                    : new Date(),

                author: formData.author.trim(),

                excerpt: formData.excerpt.trim(),

                content: formData.content.trim(),

                tags: tagsArray,

                isPublished:
                    formData.isPublished,

            };


            const response = await fetch(
                "/api/blog",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(payload),
                }
            );


            const result =
                await response.json();


            if (!response.ok || !result.success) {

                throw new Error(
                    result.message ||
                    "Failed to create blog"
                );

            }


            setSuccess(
                "Blog created successfully."
            );


            // Redirect after successful creation

            setTimeout(() => {

                router.push("/admin/blogs");

            }, 800);


        } catch (error) {

            console.error(
                "Create Blog Error:",
                error
            );

            setError(
                error.message ||
                "Something went wrong"
            );

        } finally {

            setLoading(false);

        }

    };


    return (

        <div className="add-blog-page">


            {/* =================================
                HEADER
            ================================= */}

            <div className="add-blog-header">

                <div>

                    <div className="breadcrumb">

                        <Link href="/admin/blogs">
                            Blogs
                        </Link>

                        <span>/</span>

                        <strong>
                            Add Blog
                        </strong>

                    </div>


                    <h2>
                        Add New Blog
                    </h2>

                    <p>
                        Create a new blog post
                        for your website.
                    </p>

                </div>


                <Link
                    href="/admin/blogs"
                    className="back-blog-btn"
                >
                    ← Back to Blogs
                </Link>

            </div>


            {/* =================================
                ERROR
            ================================= */}

            {error && (

                <div className="add-blog-error">
                    {error}
                </div>

            )}


            {/* =================================
                SUCCESS
            ================================= */}

            {success && (

                <div className="add-blog-success">
                    {success}
                </div>

            )}


            {/* =================================
                FORM
            ================================= */}

            <form
                className="blog-form"
                onSubmit={handleSubmit}
            >


                {/* =================================
                    BASIC INFORMATION
                ================================= */}

                <div className="blog-form-card">

                    <div className="blog-form-card-header">

                        <h3>
                            Basic Information
                        </h3>

                        <p>
                            Enter the main details
                            of your blog.
                        </p>

                    </div>


                    <div className="blog-form-body">


                        {/* Title */}

                        <div className="form-group">

                            <label>
                                Blog Title
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={
                                    handleTitleChange
                                }
                                placeholder="Enter blog title"
                                required
                            />

                        </div>


                        {/* Slug */}

                        <div className="form-group">

                            <label>
                                Slug
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={
                                    handleChange
                                }
                                placeholder="blog-post-url"
                                required
                            />

                            <small>
                                URL:
                                /blog/{formData.slug ||
                                    "your-blog-slug"}
                            </small>

                        </div>


                        <div className="form-row">


                            {/* Category */}

                            <div className="form-group">

                                <label>
                                    Category
                                    <span>*</span>
                                </label>

                                <input
                                    type="text"
                                    name="category"
                                    value={
                                        formData.category
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="Medical News"
                                    required
                                />

                            </div>


                            {/* Author */}

                            <div className="form-group">

                                <label>
                                    Author
                                    <span>*</span>
                                </label>

                                <input
                                    type="text"
                                    name="author"
                                    value={
                                        formData.author
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="Author name"
                                    required
                                />

                            </div>

                        </div>


                        {/* Image */}

                        <div className="form-group">

                            <label>
                                Featured Image URL
                            </label>

                            <input
                                type="text"
                                name="image"
                                value={
                                    formData.image
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="https://example.com/image.jpg"
                            />

                            <small>
                                Enter the image URL
                                for the blog.
                            </small>

                        </div>


                        {/* Date */}

                        <div className="form-group">

                            <label>
                                Publish Date
                            </label>

                            <input
                                type="date"
                                name="date"
                                value={
                                    formData.date
                                }
                                onChange={
                                    handleChange
                                }
                            />

                        </div>


                    </div>

                </div>


                {/* =================================
                    CONTENT
                ================================= */}

                <div className="blog-form-card">

                    <div className="blog-form-card-header">

                        <h3>
                            Blog Content
                        </h3>

                        <p>
                            Write the content
                            displayed on the website.
                        </p>

                    </div>


                    <div className="blog-form-body">


                        {/* Excerpt */}

                        <div className="form-group">

                            <label>
                                Excerpt
                                <span>*</span>
                            </label>

                            <textarea
                                name="excerpt"
                                value={
                                    formData.excerpt
                                }
                                onChange={
                                    handleChange
                                }
                                rows="4"
                                placeholder="Write a short description of the blog..."
                                required
                            />

                        </div>


                        {/* Content */}

                        <div className="form-group">

                            <label>
                                Content
                                <span>*</span>
                            </label>

                            <textarea
                                name="content"
                                value={
                                    formData.content
                                }
                                onChange={
                                    handleChange
                                }
                                rows="14"
                                placeholder="Write your blog content here..."
                                required
                            />

                        </div>


                        {/* Tags */}

                        <div className="form-group">

                            <label>
                                Tags
                            </label>

                            <input
                                type="text"
                                name="tags"
                                value={
                                    formData.tags
                                }
                                onChange={
                                    handleChange
                                }
                                placeholder="health, surgery, medical, hospital"
                            />

                            <small>
                                Separate tags using
                                commas.
                            </small>

                        </div>


                    </div>

                </div>


                {/* =================================
                    PUBLISH SETTINGS
                ================================= */}

                <div className="blog-form-card">

                    <div className="blog-form-card-header">

                        <h3>
                            Publish Settings
                        </h3>

                        <p>
                            Control the visibility
                            of your blog.
                        </p>

                    </div>


                    <div className="blog-form-body">

                        <label className="publish-toggle">

                            <input
                                type="checkbox"
                                name="isPublished"
                                checked={
                                    formData.isPublished
                                }
                                onChange={
                                    handleChange
                                }
                            />

                            <span className="toggle-slider"></span>

                            <div>

                                <strong>
                                    Publish Blog
                                </strong>

                                <small>
                                    Make this blog
                                    visible on the
                                    website.
                                </small>

                            </div>

                        </label>

                    </div>

                </div>


                {/* =================================
                    ACTIONS
                ================================= */}

                <div className="blog-form-actions">

                    <Link
                        href="/admin/blogs"
                        className="cancel-blog-btn"
                    >
                        Cancel
                    </Link>


                    <button
                        type="submit"
                        className="save-blog-btn"
                        disabled={loading}
                    >

                        {loading
                            ? "Saving..."
                            : "Save Blog"}

                    </button>

                </div>


            </form>

        </div>

    );
}
