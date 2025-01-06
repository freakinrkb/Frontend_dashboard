import Hero from "@components/Home/Hero";
import SubHero from "@components/Home/SubHero";
import Expertise from "@components/Home/Expertise";
import Domains from "@components/Home/Domains";
import Counts from "@components/Home/Counts";
import ClientFeedback from "@components/Home/ClientFeedback";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      <SubHero />

      {/* Expertise Section */}
      <Domains />
      <Expertise />

      {/* Stats Section */}
      <Counts />
      <ClientFeedback />
    </main>
  );
};

export default Home;
