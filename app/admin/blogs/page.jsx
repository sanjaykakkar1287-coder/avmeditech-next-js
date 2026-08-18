"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogsPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch("/api/blog");

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to fetch blogs"
                );
            }

            setBlogs(result.data || []);

        } catch (error) {
            console.error("Fetch Blogs Error:", error);

            setError(
                error.message || "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };


    const filteredBlogs = blogs.filter((blog) => {

        const searchText = search.toLowerCase();

        const matchesSearch =
            blog.title?.toLowerCase().includes(searchText) ||
            blog.category?.toLowerCase().includes(searchText) ||
            blog.author?.toLowerCase().includes(searchText);

        const matchesStatus =
            status === "all"
                ? true
                : status === "published"
                ? blog.isPublished === true
                : blog.isPublished === false;

        return matchesSearch && matchesStatus;
    });


    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );
    };


    if (loading) {
        return (
            <div className="blog-page">

                <div className="blog-page-header">
                    <div>
                        <h2>Blogs</h2>
                        <p>
                            Manage all your website blog posts.
                        </p>
                    </div>
                </div>

                <div className="blog-loading">
                    Loading blogs...
                </div>

            </div>
        );
    }


    return (
        <div className="blog-page">

            {/* Header */}

            <div className="blog-page-header">

                <div>
                    <h2>Blogs</h2>

                    <p>
                        Manage all your website blog posts.
                    </p>
                </div>

                <Link
                    href="/admin/blogs/add"
                    className="add-blog-btn"
                >
                    + Add New Blog
                </Link>

            </div>


            {/* Error */}

            {error && (
                <div className="blog-error">
                    {error}
                </div>
            )}


            {/* Filters */}

            <div className="blog-toolbar">

                <div className="blog-search">

                    <span>⌕</span>

                    <input
                        type="text"
                        placeholder="Search blogs..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>


                <div className="blog-filter">

                    <select
                        value={status}
                        onChange={(e) =>
                            setStatus(e.target.value)
                        }
                    >
                        <option value="all">
                            All Blogs
                        </option>

                        <option value="published">
                            Published
                        </option>

                        <option value="draft">
                            Draft
                        </option>
                    </select>

                </div>

            </div>


            {/* Blog Table */}

            <div className="blog-table-card">

                <div className="blog-table-header">

                    <div>
                        <h3>All Blogs</h3>

                        <span>
                            {filteredBlogs.length} blog
                            {filteredBlogs.length !== 1
                                ? "s"
                                : ""}
                        </span>
                    </div>

                </div>


                {filteredBlogs.length === 0 ? (

                    <div className="blog-empty">

                        <div className="empty-icon">
                            ✎
                        </div>

                        <h3>
                            No blogs found
                        </h3>

                        <p>
                            Try changing your search or
                            create a new blog.
                        </p>

                        <Link
                            href="/admin/blogs/add"
                            className="empty-add-btn"
                        >
                            Add New Blog
                        </Link>

                    </div>

                ) : (

                    <div className="blog-table-wrapper">

                        <table className="blog-table">

                            <thead>
                                <tr>

                                    <th>Blog</th>
                                    <th>Category</th>
                                    <th>Author</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>

                                </tr>
                            </thead>


                            <tbody>

                                {filteredBlogs.map(
                                    (blog) => (

                                        <tr key={blog._id}>

                                            {/* Blog */}

                                            <td>

                                                <div className="blog-info">

                                                    {blog.image ? (

                                                        <img
                                                            src={blog.image}
                                                            alt={
                                                                blog.title
                                                            }
                                                            className="blog-thumbnail"
                                                        />

                                                    ) : (

                                                        <div className="blog-thumbnail-placeholder">
                                                            AV
                                                        </div>

                                                    )}

                                                    <div>

                                                        <strong>
                                                            {blog.title}
                                                        </strong>

                                                        <span>
                                                            /{blog.slug}
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>


                                            {/* Category */}

                                            <td>
                                                <span className="category-badge">
                                                    {blog.category}
                                                </span>
                                            </td>


                                            {/* Author */}

                                            <td>
                                                {blog.author}
                                            </td>


                                            {/* Date */}

                                            <td>
                                                {formatDate(
                                                    blog.date
                                                )}
                                            </td>


                                            {/* Status */}

                                            <td>

                                                <span
                                                    className={`blog-status ${
                                                        blog.isPublished
                                                            ? "published"
                                                            : "draft"
                                                    }`}
                                                >
                                                    {blog.isPublished
                                                        ? "Published"
                                                        : "Draft"}
                                                </span>

                                            </td>


                                            {/* Actions */}

                                            <td>

                                                <div className="blog-actions">

                                                    <Link
                                                        href={`/admin/blogs/edit/${blog._id}`}
                                                        className="action-btn edit"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        className="action-btn delete"
                                                    >
                                                        Delete
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </div>
    );
}