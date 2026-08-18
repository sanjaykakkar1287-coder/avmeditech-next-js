import ProductSlug from "../../../../../Components/products/ProductSlug";

export default async function Page({ params }) {

    const { category, slug } = await params;

    return (
        <ProductSlug
            categorySlug={category}
            productSlug={slug}
        />
    );
}