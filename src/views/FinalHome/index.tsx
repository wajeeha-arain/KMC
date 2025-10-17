


import PricingSection from "./PricingSection"
import SectionPartnerCards from "./SectionPartnerCards"
import PremiumWorkspaces from "./PremiumWorkspaces"
import LocationsSection from "./LocationsSection"
import TeamSpaces from "./TeamSpaces"
import SecuritySection from "./SecuritySection"
import SecurityCTA from "./SecurityCTA"
import CustomerSuccess from "./CustomerSuccess"
import TransformBusiness from "./TransformBusiness"
import PartnerSolutions from "./PartnerSolutions"
import Layout from "@/Component/Layout"
import CertifiedExcellence from "./CertifiedExcellence"
import FAQSection from "./FAQSection"
import KmcDifference from "./KmcDifference"
import Talentsection from "./Talentsection"
import WhyKMC from "./WhyKMC"
import HeroSection from "./HeroSection"
import Logo from "./Logo"


const FinalHome = ({ }) => {
  return (
  
<Layout >
    <HeroSection />
    <Logo />
     <PartnerSolutions />
     <PricingSection />
      <WhyKMC />
      <KmcDifference />
     <SectionPartnerCards />
     <PremiumWorkspaces />
     <LocationsSection />
     <TeamSpaces />
     <SecuritySection />
     <SecurityCTA />
     <CustomerSuccess />
       <Talentsection />
     <CertifiedExcellence />
         <FAQSection />
     <TransformBusiness />
 
 </Layout>
      
  )
}

export default FinalHome