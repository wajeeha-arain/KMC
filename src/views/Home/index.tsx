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
    </Layout>



  )
};

export default Home;