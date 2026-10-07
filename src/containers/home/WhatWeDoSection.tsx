import Animation from "@/components/animation/Animation";
import ServiceCard from "@/components/card/ServiceCard";
import { Button } from "@/components/ui/button";
import { useGetWhatWeDoServices } from "@/lib/react-query/query/services.query";
import { ENUMs } from "@/lib/enums";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const WhatWeDoSection = () => {
  const { t } = useTranslation();
  const { data: services = [] } = useGetWhatWeDoServices();

  return (
    <section className="bg-[#F2EEE4] py-16 md:py-24">
      <div className="flex flex-col items-center text-center gap-3 mb-12">
        <Animation.Text
          as="span"
          transition={{ duration: 0.5 }}
          className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
          {t("home.what_we_do.eyebrow")}
        </Animation.Text>
        <Animation.Text
          as="h2"
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-2xl md:text-4xl font-bold text-primary">
          {t("home.what_we_do.title")}
        </Animation.Text>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, index) => (
          <ServiceCard
            key={s.id}
            titleKey={s.titleKey}
            bodyKey={s.bodyKey}
            icon={s.icon}
            variant="white"
            index={index}
          />
        ))}
      </div>
      <Animation.Text
        as="p"
        transition={{ duration: 0.55, delay: 0.2 }}
        className="text-center text-yellow italic mt-10 text-sm md:text-base">
        {t("home.what_we_do.tagline")}
      </Animation.Text>
      <Animation.Fade delay={0.3}>
        <div className="flex justify-center mt-6">
          <Button
            render={<Link to={ENUMs.PAGES.SERVICES} />}
            variant="outline"
            size="lg">
            {t("home.what_we_do.cta")}
          </Button>
        </div>
      </Animation.Fade>
    </section>
  );
};

export default WhatWeDoSection;
