import HeroSection from "@/containers/home/HeroSection";
import PathwaysSection from "@/containers/home/PathwaysSection";
import WhatWeDoSection from "@/containers/home/WhatWeDoSection";
import FounderSection from "@/containers/home/FounderSection";
import AboutOpgSection from "@/containers/home/AboutOpgSection";
import ReadySection from "@/containers/home/ReadySection";
import PreFooterCta from "@/components/shared/PreFooterCta";
import StatsBand from "@/components/shared/StatsBand";
import { useGetHomeStats } from "@/lib/react-query/query/stats.query";

const Home = () => {
  const { data: stats = [] } = useGetHomeStats();

  return (
    <>
      <HeroSection />
      <PathwaysSection />
      <WhatWeDoSection />
      <StatsBand stats={stats} />
      <FounderSection />
      <AboutOpgSection />
      <ReadySection />
      <PreFooterCta />
    </>
  );
};

export default Home;
