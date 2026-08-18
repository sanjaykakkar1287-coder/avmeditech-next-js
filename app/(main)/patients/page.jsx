
import Patient from "./component/home/Patient";
import ConditionDetail from "./component/home/ConditionDetail";
import EyeCareJourney from "./component/home/EyeCare";
import PatientEducationSection from "./component/home/PatientEducationSection";


export default function HomePatients() {
  return (
    <>
<Patient />
<EyeCareJourney />
<PatientEducationSection />

    </>
  );
}