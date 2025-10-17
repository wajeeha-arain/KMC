import Layout from "@/Component/Layout";
import TeamWork from "./TeamWork";
import StartingFive from "./StartingFive";
import Officeroom from "./Officeroom";
import ClientSection from "./ClientSection";
import PartnerSection from "./PartnerSection";
import Hero from "./Hero";
import Businesses from "./Businesses";
import Card from "./Card"
import SectionsCard from "./SectionsCard"
import Logos from "./Logos";









const Home = ({ }) => {
  return (
    <Layout>
      <Hero />
      <Logos />
      <Businesses />
       <Card />
      <TeamWork />
      <StartingFive />
      <Officeroom />
      <ClientSection />
      <SectionsCard />
      <PartnerSection />

    </Layout>



  )
};

export default Home;