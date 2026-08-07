import Hero from "@/Components/home/Hero";
import CategoryTabs from "@/Components/home/CategoryTabs";
import CoreValues from "@/Components/home/CoreValues";

import IolShowcase from "@/Components/home/IolShowcase";
import IolBenefitsSection from "@/Components/home/IolBenefitsSection";
import OurPartnersMarquee from "../Components/home/OurPartnersMarquee";
import WhyChooseUs from "../Components/home/WhyChooseUs";
import WhyChooseUsStack from "../Components/home/WhyChooseUsStack";
import FaqSection from "../Components/home/FaqSection";
import Modal from "@/Components/layout/modal/Modal";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryTabs />
      <CoreValues />
      <IolShowcase />
      <IolBenefitsSection />
      <OurPartnersMarquee />
       <WhyChooseUs />
       <WhyChooseUsStack />
       <FaqSection />
       <Modal />
    </>
  );
}
