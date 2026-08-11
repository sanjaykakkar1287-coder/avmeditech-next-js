import PatientsHeader from "./component/layout/PatientsHeader";


export default function PatientsLayout({ children }) {
  return (
    <>
      <PatientsHeader />

      <main>
        {children}
      </main>

      
    </>
  );
}