import { notFound } from "next/navigation";

import TreatmentDetails from "../../component/Treatments/TreatmentsDetails";
import { treatments } from "../../component/Treatments/treatmentData";


export default async function TreatmentPage({ params }) {
    const { slug } = await params;

    const treatment = treatments.find(
        (item) => item.slug === slug
    );

    if (!treatment) {
        notFound();
    }

    return (
        <TreatmentDetails treatment={treatment} />
    );
}