import Layout from "@/Component/Layout";
import TeamWork from "./TeamWork";
import StartingFive from "./StartingFive";
import Officeroom from "./Officeroom";
import ClientSection from "./ClientSection";








const Home = ({ }) => {
  return (
<Layout>   
     
     <TeamWork />
     <StartingFive />
     <Officeroom />
     <ClientSection />

</Layout>



  )
};

export default Home;