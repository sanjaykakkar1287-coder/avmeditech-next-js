import ConditionDetail from "../../component/home/ConditionDetail";

export default async function Page({ params }) {
    const { slug } = await params;

    return (
        <ConditionDetail conditionSlug={slug} />
    );
}