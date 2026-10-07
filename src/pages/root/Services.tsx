import AudienceCard from "@/components/card/AudienceCard";
import ServiceCard from "@/components/card/ServiceCard";
import PageHero from "@/components/shared/PageHero";
import PreFooterCta from "@/components/shared/PreFooterCta";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  useGetAdvisoryServices,
  useGetConsultancyServices,
  useGetDevelopmentAcquisitionCards,
} from "@/lib/react-query/query/services.query";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();
  const { data: development = [] } = useGetDevelopmentAcquisitionCards();
  const { data: consultancy = [] } = useGetConsultancyServices();
  const { data: advisory = [] } = useGetAdvisoryServices();

  return (
    <>
      <PageHero
        eyebrowKey="services.hero.eyebrow"
        titleKey="services.hero.title"
        bodyKey="services.hero.body"
      />

      <section className="bg-white py-16 md:py-24">
        <SectionHeader
          eyebrowKey="services.development.eyebrow"
          titleKey="services.development.title"
          align="left"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {development.map((card) => (
            <AudienceCard
              key={card.id}
              eyebrowKey={card.eyebrowKey}
              titleKey={card.titleKey}
              bodyKey={card.bodyKey}
              pointsKeys={card.pointsKeys}
              variant={card.variant === "dark" ? "dark" : "sage"}
              cta={
                <Button
                  render={<Link to={card.href} />}
                  className="w-fit mt-4"
                  size="lg">
                  {t(card.ctaKey)}
                </Button>
              }
            />
          ))}
        </div>
      </section>

      <section className="bg-[#F2EEE4] py-16 md:py-24">
        <SectionHeader
          eyebrowKey="services.consultancy.eyebrow"
          titleKey="services.consultancy.title"
          bodyKey="services.consultancy.intro"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {consultancy.map((s) => (
            <ServiceCard
              key={s.id}
              titleKey={s.titleKey}
              bodyKey={s.bodyKey}
              icon={s.icon}
              variant="white"
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <SectionHeader
          eyebrowKey="services.advisory.eyebrow"
          titleKey="services.advisory.title"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {advisory.map((s) => (
            <ServiceCard
              key={s.id}
              titleKey={s.titleKey}
              bodyKey={s.bodyKey}
              variant="sage"
            />
          ))}
        </div>
      </section>

      <PreFooterCta />
    </>
  );
};

export default Services;
