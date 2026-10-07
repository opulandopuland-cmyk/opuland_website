import Animation from "@/components/animation/Animation";
import FeatureCard from "@/components/card/FeatureCard";
import { Button } from "@/components/ui/button";
import { useGetAboutFeatures } from "@/lib/react-query/query/features.query";
import { ENUMs } from "@/lib/enums";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutOpgSection = () => {
  const { t } = useTranslation();
  const { data: features = [] } = useGetAboutFeatures();

  return (
    <section className="bg-white py-16 md:py-24 border-t border-primary/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <Animation.Slide
          from="left"
          className="order-2 md:order-1 rounded-xl overflow-hidden aspect-[4/3]">
          <Animation.Image
            src="/images/home.jpg"
            alt=""
            className="w-full h-full"
          />
        </Animation.Slide>
        <Animation.Slide
          from="right"
          delay={0.12}
          className="flex flex-col gap-4 text-primary order-1 md:order-2">
          <Animation.Text
            as="span"
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
            {t("home.about_opg.eyebrow")}
          </Animation.Text>
          <Animation.Text
            as="h2"
            transition={{ duration: 0.65, delay: 0.22 }}
            className="text-2xl md:text-4xl font-bold">
            {t("home.about_opg.title")}
          </Animation.Text>
          <Animation.Text
            as="p"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-primary/70 leading-relaxed whitespace-pre-line">
            {t("home.about_opg.body")}
          </Animation.Text>
          <div className="flex flex-col gap-4 mt-4">
            {features.map((f, index) => (
              <FeatureCard
                key={f.id}
                titleKey={f.titleKey}
                bodyKey={f.bodyKey}
                index={index}
              />
            ))}
          </div>
          <Animation.Fade delay={0.45}>
            <Button
              render={<Link to={ENUMs.PAGES.ABOUT} />}
              className="w-fit mt-4"
              size="lg">
              {t("home.about_opg.cta")}
            </Button>
          </Animation.Fade>
        </Animation.Slide>
      </div>
    </section>
  );
};

export default AboutOpgSection;
