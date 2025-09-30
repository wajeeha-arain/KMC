
import Navbar from "@/Component/Layout/Navbar/Navbar"

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


const FinalHome = ({ }) => {
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
     <TransformBusiness />
 
        </>
  )
}

export default FinalHome