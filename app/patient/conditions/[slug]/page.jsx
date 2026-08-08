import ConditionDetail from "../../../../Components/patient/ConditionDetail";

export default async function ConditionPage({ params }) {

    const { slug } = await params;

    return (
        <ConditionDetail
            conditionSlug={slug}
        />
    );
}