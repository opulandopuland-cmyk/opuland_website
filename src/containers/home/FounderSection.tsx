import Animation from "@/components/animation/Animation";
import { Button } from "@/components/ui/button";
import { LinkedinIcon } from "@/components/icons/SocialIcons";
import { ENUMs } from "@/lib/enums";
import { useTranslation } from "react-i18next";

const FounderSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-6 md:gap-10 items-center max-w-5xl">
        <Animation.Slide from="left" className="w-full max-w-[280px] md:max-w-none mx-auto md:mx-0">
          <Animation.Image
            src="/images/founder.jpeg"
            alt={t("home.founder.name")}
            className="rounded-xl aspect-square w-full"
          />
        </Animation.Slide>
        <Animation.Slide from="right" delay={0.15} className="flex flex-col gap-4 text-primary">
          <Animation.Text
            as="span"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
            {t("home.founder.eyebrow")}
          </Animation.Text>
          <Animation.Text
            as="h3"
            transition={{ duration: 0.55, delay: 0.28 }}
            className="text-2xl md:text-3xl font-bold">
            {t("home.founder.name")}
          </Animation.Text>
          <Animation.Text
            as="p"
            transition={{ duration: 0.5, delay: 0.34 }}
            className="text-primary/60 text-sm">
            {t("home.founder.role")}
          </Animation.Text>
          <Animation.Text
            as="p"
            transition={{ duration: 0.55, delay: 0.4 }}
            className="text-sm md:text-base text-primary/70 leading-relaxed">
            {t("home.founder.body")}
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
              {t("home.founder.cta")}
            </Button>
          </Animation.Fade>
        </Animation.Slide>
      </div>
    </section>
  );
};

export default FounderSection;
