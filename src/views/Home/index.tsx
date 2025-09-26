import Layout from "@/Component/Layout";
import TeamWork from "./TeamWork";
import StartingFive from "./StartingFive";
import Officeroom from "./Officeroom";
import ClientSection from "./ClientSection";
import PartnerSection from "./PartnerSection";
import Hero from "./Hero";
import PartnerSolutions from "./PartnerSolutions";
import PricingSection from "./PricingSection";
import SectionPartnerCards from "./SectionPartnerCards";
import PremiumWorkspaces from "./PremiumWorkspaces";
import LocationsSection from "./LocationsSection";
import TeamSpaces from "./TeamSpaces";
import SecuritySection from "./SecuritySection";
import SecurityCTA from "./SecurityCTA";
import CustomerSuccess from "./CustomerSuccess";
import CertifiedExcellence from "./CertifiedExcellence";
import TransformBusiness from "./TransformBusiness";








const Home = ({ }) => {
  return (
    <Layout>
      <Hero />
      <TeamWork />
      <StartingFive />
      <Officeroom />
      <ClientSection />
      <PartnerSection />
      <PartnerSolutions />
      <PricingSection />
         <SectionPartnerCards />
         <PremiumWorkspaces />
         <LocationsSection />
         <TeamSpaces />
         <SecuritySection />
         <SecurityCTA />
         <CustomerSuccess />
         <CertifiedExcellence />
         {/* <TransformBusiness /> */}
    </Layout>



  )
};

export default Home;