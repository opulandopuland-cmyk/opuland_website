import Animation from "@/components/animation/Animation";
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
          <Animation.Slide from="left" className="min-h-[280px] overflow-hidden">
            <Animation.Image
              src="/images/home.jpg"
              alt=""
              className="w-full h-full min-h-[280px] md:min-h-full"
            />
          </Animation.Slide>
          <Animation.Slide
            from="right"
            delay={0.12}
            className="flex flex-col justify-center gap-4 p-8 md:p-14 text-primary bg-white">
            <Animation.Text
              as="span"
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
              {t("design.intro.eyebrow")}
            </Animation.Text>
            <Animation.Text
              as="h2"
              transition={{ duration: 0.65, delay: 0.22 }}
              className="text-2xl md:text-4xl font-bold">
              {t("design.intro.title")}
            </Animation.Text>
            <Animation.Text
              as="p"
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm md:text-base text-primary/70 leading-relaxed">
              {t("design.intro.body")}
            </Animation.Text>
          </Animation.Slide>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-24">
        <SectionHeader
          eyebrowKey="design.services.eyebrow"
          titleKey="design.services.title"
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, index) => (
            <ServiceCard
              key={s.id}
              index={index}
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
          {portfolio.map((item, index) => (
            <Animation.Container
              key={item.id}
              index={index}
              hoverLift
              className={cn(
                "rounded-xl overflow-hidden bg-[#EEF3EE] aspect-[4/3]",
                item.span === "full" && "col-span-2 md:col-span-6",
                item.span === "half" && "col-span-1 md:col-span-3",
                item.span === "third" && "col-span-1 md:col-span-2"
              )}>
              <Animation.Image
                src={item.image}
                alt={t(item.titleKey)}
                delay={index * 0.08}
                className="w-full h-full"
              />
            </Animation.Container>
          ))}
        </div>
      </section>

      <section className="bg-[#F2EEE4] py-16 md:py-24">
        <SectionHeader
          eyebrowKey="design.process.eyebrow"
          titleKey="design.process.title"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <section className="bg-primary py-16 md:py-20 flex flex-col items-center text-center gap-5">
        <Animation.Text
          as="h2"
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl font-bold text-white max-w-2xl">
          {t("design.cta.title")}
        </Animation.Text>
        <Animation.Text
          as="p"
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-white/80 text-sm md:text-base">
          {t("design.cta.body")}
        </Animation.Text>
        <Animation.Fade delay={0.25}>
          <div className="flex flex-col items-center gap-3">
            <Button render={<Link to={ENUMs.PAGES.CONTACT} />} size="lg">
              {t("design.cta.button")}
            </Button>
            <a
              href={`tel:${ENUMs.GLOBAL.PHONE.replace(/\s/g, "")}`}
              className="text-yellow underline text-sm">
              {t("design.cta.call", { phone: ENUMs.GLOBAL.PHONE })}
            </a>
          </div>
        </Animation.Fade>
      </section>
    </>
  );
};

export default DesignStudio;
