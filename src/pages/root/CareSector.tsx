import Animation from "@/components/animation/Animation";
import AudienceCard from "@/components/card/AudienceCard";
import StepCard from "@/components/card/StepCard";
import CareSiteForm from "@/components/form/CareSiteForm";
import InvestmentNotice from "@/components/shared/InvestmentNotice";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import {
  useGetCareAudienceCards,
  useGetCareJourneySteps,
} from "@/lib/react-query/query/care-sector.query";
import { useTranslation } from "react-i18next";

const CareSector = () => {
  const { t } = useTranslation();
  const { data: audience = [] } = useGetCareAudienceCards();
  const { data: steps = [] } = useGetCareJourneySteps();

  return (
    <>
      <PageHero
        eyebrowKey="care.hero.eyebrow"
        titleKey="care.hero.title"
        bodyKey="care.hero.body"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {audience.map((card, index) => (
            <AudienceCard
              key={card.id}
              index={index}
              eyebrowKey={card.eyebrowKey}
              titleKey={card.titleKey}
              bodyKey={card.bodyKey}
              pointsKeys={card.pointsKeys}
              icon={card.icon}
              variant={index === 0 ? "sage" : "white"}
              pointIcon={index === 0 ? "check" : "trend"}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#F2EEE4] py-16 md:py-24">
        <SectionHeader titleKey="care.journey.title" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              index={index}
              step={step.step}
              titleKey={step.titleKey}
              bodyKey={step.bodyKey}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-3 mb-10 max-w-2xl mx-auto">
          <Animation.Text
            as="h2"
            transition={{ duration: 0.65 }}
            className="text-2xl md:text-4xl font-bold text-primary">
            {t("care.form.title")}
          </Animation.Text>
          <Animation.Text
            as="p"
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-sm md:text-base text-primary/70 leading-relaxed">
            {t("care.form.intro")}
          </Animation.Text>
        </div>
        <Animation.Fade delay={0.2}>
          <CareSiteForm />
        </Animation.Fade>
      </section>

      <InvestmentNotice bodyKey="care.notice" />
    </>
  );
};

export default CareSector;
