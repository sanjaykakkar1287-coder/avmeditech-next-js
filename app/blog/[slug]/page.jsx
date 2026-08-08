import SingleBlog from "../../../Components/blog/SingleBlog";

export default async function BlogSlugPage({ params }) {

    const { slug } = await params;

    return (
        <SingleBlog blogSlug={slug} />
    );
}