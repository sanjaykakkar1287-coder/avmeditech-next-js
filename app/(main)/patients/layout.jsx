import PatientNav from "./component/layout/PatientsHeader";


export default function PatientsLayout({ children }) {
  return (
    <>
      
<PatientNav/>
      <main>
        {children}
      </main>

      
    </>
  );
}