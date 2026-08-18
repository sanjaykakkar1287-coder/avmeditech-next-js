"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function EditBlogPage() {

    const params = useParams();
    const router = useRouter();

    const blogId = params.id;


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


    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    // =========================================
    // FETCH BLOG
    // =========================================

    useEffect(() => {
        const loadBlog = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    `/api/blog/admin/${blogId}`
                );

                const result = await response.json();

                if (!response.ok || !result.success) {
                    throw new Error(
                        result.message ||
                            "Failed to fetch blog"
                    );
                }

                const blog = result.data;

                setFormData({
                    title: blog.title || "",
                    slug: blog.slug || "",
                    image: blog.image || "",
                    category: blog.category || "",
                    date: blog.date
                        ? new Date(blog.date)
                              .toISOString()
                              .split("T")[0]
                        : "",
                    author: blog.author || "",
                    excerpt: blog.excerpt || "",
                    content: blog.content || "",
                    tags: Array.isArray(blog.tags)
                        ? blog.tags.join(", ")
                        : "",
                    isPublished: blog.isPublished ?? true,
                });
            } catch (error) {
                console.error("Fetch Blog Error:", error);
                setError(error.message || "Failed to load blog");
            } finally {
                setLoading(false);
            }
        };

        if (blogId) {
            // This loads the blog when the edit page mounts.
            loadBlog();
        }

    }, [blogId]);


    // =========================================
    // INPUT CHANGE
    // =========================================

    const handleChange = (e) => {

        const {
            name,
            value,
            type,
            checked,
        } = e.target;


        setFormData((prev) => ({
            ...prev,

            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));

    };


    // =========================================
    // SUBMIT UPDATE
    // =========================================

    const handleSubmit = async (e) => {

        e.preventDefault();

        setSaving(true);
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
                `/api/blog/admin/${blogId}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(payload),
                }
            );


            const result =
                await response.json();


            if (
                !response.ok ||
                !result.success
            ) {
                throw new Error(
                    result.message ||
                    "Failed to update blog"
                );
            }


            setSuccess(
                "Blog updated successfully."
            );


            setTimeout(() => {

                router.push("/admin/blogs");

            }, 800);


        } catch (error) {

            console.error(
                "Update Blog Error:",
                error
            );

            setError(
                error.message ||
                "Something went wrong"
            );

        } finally {

            setSaving(false);

        }

    };


    // =========================================
    // LOADING
    // =========================================

    if (loading) {

        return (
            <div className="blog-loading">
                Loading blog...
            </div>
        );

    }


    return (

        <div className="add-blog-page">


            {/* HEADER */}

            <div className="add-blog-header">

                <div>

                    <div className="breadcrumb">

                        <Link href="/admin/blogs">
                            Blogs
                        </Link>

                        <span>/</span>

                        <strong>
                            Edit Blog
                        </strong>

                    </div>


                    <h2>
                        Edit Blog
                    </h2>

                    <p>
                        Update your blog post
                        details and content.
                    </p>

                </div>


                <Link
                    href="/admin/blogs"
                    className="back-blog-btn"
                >
                    ← Back to Blogs
                </Link>

            </div>


            {/* ERROR */}

            {error && (

                <div className="add-blog-error">
                    {error}
                </div>

            )}


            {/* SUCCESS */}

            {success && (

                <div className="add-blog-success">
                    {success}
                </div>

            )}


            <form
                className="blog-form"
                onSubmit={handleSubmit}
            >


                {/* BASIC INFORMATION */}

                <div className="blog-form-card">

                    <div className="blog-form-card-header">

                        <h3>
                            Basic Information
                        </h3>

                        <p>
                            Update the main details
                            of your blog.
                        </p>

                    </div>


                    <div className="blog-form-body">


                        {/* TITLE */}

                        <div className="form-group">

                            <label>
                                Blog Title
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={
                                    formData.title
                                }
                                onChange={
                                    handleChange
                                }
                                required
                            />

                        </div>


                        {/* SLUG */}

                        <div className="form-group">

                            <label>
                                Slug
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                name="slug"
                                value={
                                    formData.slug
                                }
                                onChange={
                                    handleChange
                                }
                                required
                            />

                            <small>
                                URL:
                                /blog/
                                {formData.slug}
                            </small>

                        </div>


                        {/* CATEGORY + AUTHOR */}

                        <div className="form-row">

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
                                    required
                                />

                            </div>


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
                                    required
                                />

                            </div>

                        </div>


                        {/* IMAGE */}

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
                            />

                        </div>


                        {/* DATE */}

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


                {/* CONTENT */}

                <div className="blog-form-card">

                    <div className="blog-form-card-header">

                        <h3>
                            Blog Content
                        </h3>

                        <p>
                            Update your blog
                            content.
                        </p>

                    </div>


                    <div className="blog-form-body">


                        {/* EXCERPT */}

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
                                required
                            />

                        </div>


                        {/* CONTENT */}

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
                                required
                            />

                        </div>


                        {/* TAGS */}

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
                            />

                            <small>
                                Separate tags
                                using commas.
                            </small>

                        </div>

                    </div>

                </div>


                {/* PUBLISH */}

                <div className="blog-form-card">

                    <div className="blog-form-card-header">

                        <h3>
                            Publish Settings
                        </h3>

                        <p>
                            Control blog visibility.
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


                {/* ACTIONS */}

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
                        disabled={saving}
                    >

                        {saving
                            ? "Updating..."
                            : "Update Blog"}

                    </button>

                </div>

            </form>

        </div>

    );
}
