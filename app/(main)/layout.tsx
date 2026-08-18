import Header from "@/Components/layout/header/Header";
import Footer from "@/Components/layout/footer/Footer";
import Modal from "@/Components/layout/modal/Modal";
import ScrollToTop from "@/Components/layout/Scrolltotop/ScrollToTop";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Modal />
      <ScrollToTop />
    </>
  );
}
