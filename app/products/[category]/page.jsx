import CategoryPage from "@/Components/products/Category";

export default async function Page({ params }) {
  const { category } = await params;

  return <CategoryPage categorySlug={category} />;
}