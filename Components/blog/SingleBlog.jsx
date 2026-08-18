import { notFound } from "next/navigation";

import styles from "./BlogList.module.css";

export default async function SingleBlog({ blogSlug }) {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${blogSlug}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        notFound();
    }

    const result = await response.json();

    if (!result.success || !result.data) {
        notFound();
    }

    const blog = result.data;

    return (
        <main className={styles.blogDetail}>

            <div className="container">

                {/* CATEGORY */}

                <span className={styles.detailCategory}>
                    {blog.category}
                </span>

                {/* TITLE */}

                <h1 className={styles.detailTitle}>
                    {blog.title}
                </h1>

                {/* META */}

                <div className={styles.detailMeta}>

                    <span>
                        {blog.author}
                    </span>

                    <span>
                        {new Date(blog.date).toLocaleDateString(
                            "en-US",
                            {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            }
                        )}
                    </span>

                </div>

                {/* FEATURED IMAGE */}

                <div className={styles.detailImage}>

                    <img
                        src={blog.image}
                        alt={blog.title}
                    />

                </div>

                {/* ARTICLE CONTENT */}

                <article className={styles.articleContent}>

                    {blog.content
                        ?.trim()
                        .split("\n\n")
                        .map((paragraph, index) => (
                            <p key={index}>
                                {paragraph.trim()}
                            </p>
                        ))}

                </article>

                {/* TAGS */}

                {blog.tags?.length > 0 && (

                    <div className={styles.tags}>

                        {blog.tags.map((tag) => (
                            <span key={tag}>
                                #{tag}
                            </span>
                        ))}

                    </div>

                )}

            </div>

        </main>
    );
}