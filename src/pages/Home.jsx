import Hero from "@components/Home/Hero";
import SubHero from "@components/Home/SubHero";
import Expertise from "@components/Home/Expertise";
import Technologies from "@components/Home/Technologies";
import Counts from "@components/Home/Counts";
import Motto from "@components/Home/Motto";
import ClientFeedback from "@components/Home/ClientFeedback";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      <SubHero />

      {/* Expertise Section */}
      <Expertise />
      <Technologies />

      {/* Stats Section */}
      <Counts />
      <Motto />
      <ClientFeedback />
    </main>
  );
};

export default Home;
