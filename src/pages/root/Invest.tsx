import Animation from "@/components/animation/Animation";
import AudienceCard from "@/components/card/AudienceCard";
import ServiceCard from "@/components/card/ServiceCard";
import StepCard from "@/components/card/StepCard";
import InvestForm from "@/components/form/InvestForm";
import InvestmentNotice from "@/components/shared/InvestmentNotice";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  useGetInvestProcessSteps,
  useGetInvestStrategies,
  useGetPartnerChips,
  useGetWhyInvestCards,
} from "@/lib/react-query/query/invest.query";
import { ENUMs } from "@/lib/enums";
import { LinkedinIcon } from "@/components/icons/SocialIcons";
import { Gem } from "lucide-react";
import { useTranslation } from "react-i18next";

const Invest = () => {
  const { t } = useTranslation();
  const { data: why = [] } = useGetWhyInvestCards();
  const { data: partners = [] } = useGetPartnerChips();
  const { data: strategies = [] } = useGetInvestStrategies();
  const { data: steps = [] } = useGetInvestProcessSteps();

  return (
    <>
      <PageHero
        eyebrowKey="invest.hero.eyebrow"
        titleKey="invest.hero.title"
        bodyKey="invest.hero.body"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-6 md:gap-10 items-center max-w-5xl">
          <Animation.Slide from="left" className="w-full max-w-[280px] md:max-w-none">
            <Animation.Image
              src="/images/founder.jpeg"
              alt={t("invest.who.name")}
              className="rounded-xl aspect-square w-full"
            />
          </Animation.Slide>
          <Animation.Slide from="right" delay={0.15} className="flex flex-col gap-4 text-primary">
            <Animation.Text
              as="span"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
              {t("invest.who.eyebrow")}
            </Animation.Text>
            <Animation.Text
              as="h3"
              transition={{ duration: 0.55, delay: 0.28 }}
              className="text-2xl md:text-3xl font-bold">
              {t("invest.who.name")}
            </Animation.Text>
            <Animation.Text
              as="p"
              transition={{ duration: 0.5, delay: 0.34 }}
              className="text-primary/60 text-sm">
              {t("invest.who.role")}
            </Animation.Text>
            <Animation.Text
              as="p"
              transition={{ duration: 0.55, delay: 0.4 }}
              className="text-sm md:text-base text-primary/70 leading-relaxed">
              {t("invest.who.body")}
            </Animation.Text>
            <Animation.Fade delay={0.5}>
              <Button
                render={
                  <a
                    href={ENUMs.GLOBAL.LINKEDIN_FOUNDER}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                variant="linkedin"
                className="w-fit gap-2"
                size="lg">
                <LinkedinIcon className="size-4" />
                {t("invest.who.cta")}
              </Button>
            </Animation.Fade>
          </Animation.Slide>
        </div>
      </section>

      <section className="bg-[#F2EEE4] py-16 md:py-24">
        <SectionHeader titleKey="invest.why.title" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {why.map((card, index) => (
            <ServiceCard
              key={card.id}
              index={index}
              titleKey={card.titleKey}
              bodyKey={card.bodyKey}
              icon={card.icon}
              variant="white"
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <SectionHeader titleKey="invest.philosophy.title" />
        <p className="text-center text-primary/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
          {t("invest.philosophy.body")}
        </p>
      </section>

      <section className="bg-primary py-16 md:py-24">
        <SectionHeader
          eyebrowKey="invest.partners.eyebrow"
          titleKey="invest.partners.title"
          bodyKey="invest.partners.lead"
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {partners.map((chip, index) => (
            <Animation.Container
              key={chip.id}
              index={index}
              hoverLift
              className="flex items-center gap-3 border border-white/20 rounded-xl px-5 py-4 text-white">
              <Gem className="size-4 text-yellow shrink-0" />
              <span className="text-sm">{t(chip.labelKey)}</span>
            </Animation.Container>
          ))}
        </div>
      </section>

      <section className="bg-[#F2EEE4] py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {strategies.map((s, index) => (
            <AudienceCard
              key={s.id}
              index={index}
              eyebrowKey={s.eyebrowKey}
              titleKey={s.titleKey}
              bodyKey={s.bodyKey}
              pointsKeys={s.pointsKeys}
              variant={s.variant === "dark" ? "dark" : "white"}
              cta={
                <Button
                  render={<a href={s.href} />}
                  className="w-fit mt-4 rounded-full"
                  size="lg">
                  {t(s.ctaKey)}
                </Button>
              }
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <SectionHeader titleKey="invest.process.title" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              index={index}
              step={step.step}
              titleKey={step.titleKey}
              bodyKey={step.bodyKey}
              variant="padded"
            />
          ))}
        </div>
        <p className="italic text-sm text-primary/60 text-center mt-8 max-w-2xl mx-auto">
          {t("invest.process.footnote")}
        </p>
      </section>

      <InvestmentNotice bodyKey="invest.notice" />

      <section id="register" className="bg-white py-16 md:py-24 scroll-mt-24">
        <div className="flex flex-col items-center text-center gap-3 mb-10 max-w-2xl mx-auto">
          <Badge className="bg-yellow/20 text-primary border-yellow/40 mb-2">
            {t("invest.form.badge")}
          </Badge>
          <p className="italic text-sm text-primary/60">
            {t("invest.form.lead")}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary">
            {t("invest.form.title")}
          </h2>
          <p className="text-sm md:text-base text-primary/70">
            {t("invest.form.intro")}
          </p>
        </div>
        <InvestForm />
      </section>
    </>
  );
};

export default Invest;
