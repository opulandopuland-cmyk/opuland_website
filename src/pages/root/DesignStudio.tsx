import ServiceCard from "@/components/card/ServiceCard";
import StepCard from "@/components/card/StepCard";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  useGetDesignProcessSteps,
  useGetDesignServices,
  useGetPortfolioItems,
} from "@/lib/react-query/query/design-studio.query";
import { ENUMs } from "@/lib/enums";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const DesignStudio = () => {
  const { t } = useTranslation();
  const { data: services = [] } = useGetDesignServices();
  const { data: steps = [] } = useGetDesignProcessSteps();
  const { data: portfolio = [] } = useGetPortfolioItems();

  return (
    <>
      <PageHero
        eyebrowKey="design.hero.eyebrow"
        titleKey="design.hero.title"
        bodyKey="design.hero.body"
        variant="deep">
        <Button
          render={<Link to={ENUMs.PAGES.CONTACT} />}
          className="mt-2"
          size="lg">
          {t("design.hero.cta")}
        </Button>
      </PageHero>

      <section className="bg-white py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[50vh]">
          <div className="min-h-[280px] overflow-hidden">
            <img
              src="/images/home.jpg"
              alt=""
              className="w-full h-full object-cover min-h-[280px] md:min-h-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 md:p-14 text-primary bg-white">
            <span className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
              {t("design.intro.eyebrow")}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold">
              {t("design.intro.title")}
            </h2>
            <p className="text-sm md:text-base text-primary/70 leading-relaxed">
              {t("design.intro.body")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-24">
        <SectionHeader
          eyebrowKey="design.services.eyebrow"
          titleKey="design.services.title"
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              titleKey={s.titleKey}
              bodyKey={s.bodyKey}
              icon={s.icon}
              variant="dark"
              className="border border-white/10"
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <SectionHeader
          eyebrowKey="design.portfolio.eyebrow"
          titleKey="design.portfolio.title"
          align="left"
        />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          {portfolio.map((item) => (
            <div
              key={item.id}
              className={cn(
                "rounded-xl overflow-hidden bg-[#EEF3EE] aspect-[4/3]",
                item.span === "full" && "col-span-2 md:col-span-6",
                item.span === "half" && "col-span-1 md:col-span-3",
                item.span === "third" && "col-span-1 md:col-span-2"
              )}>
              <img
                src={item.image}
                alt={t(item.titleKey)}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F2EEE4] py-16 md:py-24">
        <SectionHeader
          eyebrowKey="design.process.eyebrow"
          titleKey="design.process.title"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              step={step.step}
              titleKey={step.titleKey}
              bodyKey={step.bodyKey}
            />
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 md:py-20 flex flex-col items-center text-center gap-5">
        <h2 className="text-2xl md:text-4xl font-bold text-white max-w-2xl">
          {t("design.cta.title")}
        </h2>
        <p className="text-white/80 text-sm md:text-base">
          {t("design.cta.body")}
        </p>
        <Button render={<Link to={ENUMs.PAGES.CONTACT} />} size="lg">
          {t("design.cta.button")}
        </Button>
        <a
          href={`tel:${ENUMs.GLOBAL.PHONE.replace(/\s/g, "")}`}
          className="text-yellow underline text-sm">
          {t("design.cta.call", { phone: ENUMs.GLOBAL.PHONE })}
        </a>
      </section>
    </>
  );
};

export default DesignStudio;
