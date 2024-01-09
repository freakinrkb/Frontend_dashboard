import Hero from "@components/About/Hero";
import WhatWeDo from "@components/About/WhatWeDo";
import SubHero from "@components/About/SubHero";
import MissionVision from "@components/About/MissionVision";
import Qualities from "@components/About/Qualities";

const About = () => {
  return (
    <main>
      <Hero />
      <SubHero />
      <MissionVision />
      <WhatWeDo />
      <Qualities />
    </main>
  );
};

export default About;
