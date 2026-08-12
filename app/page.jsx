import Hero from "@/Components/home/Hero";
import CategoryTabs from "@/Components/home/CategoryTabs";
import CoreValues from "@/Components/home/CoreValues";
import StatsSection from "@/Components/home/Team";
import IolShowcase from "@/Components/home/IolShowcase";
import IolBenefitsSection from "@/Components/home/IolBenefitsSection";
import OurPartnersMarquee from "../Components/home/OurPartnersMarquee";
import WhyChooseUs from "../Components/home/WhyChooseUs";
import FaqSection from "../Components/home/FaqSection";
import AboutSection from "../Components/home/AboutSection";
import Welcome from "@/Components/welcome/Welcome";
import "./home-responsive.css";


export const metadata = {
  title: "Home | AV Meditech",
  description: "Welcome to AV Meditech.",
};

export default function Home() {
  return (
    <>
    <Welcome />
      <Hero />
      <AboutSection />
      <CategoryTabs />
      <CoreValues />
      <IolShowcase />
      <IolBenefitsSection />
      <OurPartnersMarquee />
      <StatsSection />
       <WhyChooseUs />
       
       <FaqSection />
      
    </>
  );
}
