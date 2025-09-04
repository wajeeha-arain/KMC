import Layout from "@/Component/Layout";
import TeamWork from "./TeamWork";
import StartingFive from "./StartingFive";
import Officeroom from "./Officeroom";
import ClientSection from "./ClientSection";
import PartnerSection from "./PartnerSection";








const Home = ({ }) => {
  return (
<Layout>   
     
     <TeamWork />
     <StartingFive />
     <Officeroom />
     <ClientSection />
     <PartnerSection />

</Layout>



  )
};

export default Home;