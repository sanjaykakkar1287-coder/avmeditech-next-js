import { notFound } from "next/navigation";

import { blogs } from "./blogData";
import styles from "./BlogList.module.css";

export default function SingleBlog({ blogSlug }) {

    // Find blog using URL slug
    const blog = blogs.find(
        (item) => item.slug === blogSlug
    );

    // Blog not found
    if (!blog) {
        notFound();
    }

    return (
        <main className={styles.blogDetail}>

            <div className="container">

                {/* =========================
                    CATEGORY
                ========================= */}

                <span className={styles.detailCategory}>
                    {blog.category}
                </span>


                {/* =========================
                    TITLE
                ========================= */}

                <h1 className={styles.detailTitle}>
                    {blog.title}
                </h1>


                {/* =========================
                    META
                ========================= */}

                <div className={styles.detailMeta}>

                    <span>
                        {blog.author}
                    </span>

                    <span>
                        {blog.date}
                    </span>

                </div>


                {/* =========================
                    FEATURED IMAGE
                ========================= */}

                <div className={styles.detailImage}>

                    <img
                        src={blog.image}
                        alt={blog.title}
                    />

                </div>


                {/* =========================
                    ARTICLE CONTENT
                ========================= */}

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


                {/* =========================
                    TAGS
                ========================= */}

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