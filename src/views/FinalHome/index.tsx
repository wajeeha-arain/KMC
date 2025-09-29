import Navbar from "@/Component/Layout/Navbar/Navbar"
import PartnerSolutions from "./PartnerSolutions"
import PricingSection from "./PricingSection"
import SectionPartnerCards from "./SectionPartnerCards"
import PremiumWorkspaces from "./PremiumWorkspaces"
import LocationsSection from "./LocationsSection"
import TeamSpaces from "./TeamSpaces"
import SecuritySection from "./SecuritySection"
import SecurityCTA from "./SecurityCTA"
import CustomerSuccess from "./CustomerSuccess"
import CertifiedExcellence from "./CertifiedExcellence"
import TransformBusiness from "./TransformBusiness"


const FinalHome = () => {
  return (
    <>
  <Navbar />
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
     <TransformBusiness />
 
        </>
  )
}

export default FinalHome