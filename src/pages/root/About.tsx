import Animation from "@/components/animation/Animation";
import PreFooterCta from "@/components/shared/PreFooterCta";
import { Button } from "@/components/ui/button";
import { ENUMs } from "@/lib/enums";
import { LinkedinIcon } from "@/components/icons/SocialIcons";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-white py-16 md:py-24 flex flex-col items-center text-center gap-5">
        <Animation.Fade>
          <Animation.Image
            src="/images/founder.jpeg"
            alt={t("about.founder.name")}
            className="rounded-xl size-48 md:size-64 mx-auto"
          />
        </Animation.Fade>
        <Animation.Text
          as="h2"
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl md:text-3xl font-bold text-primary">
          {t("about.founder.name")}
        </Animation.Text>
        <Animation.Text
          as="p"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-primary/60 text-sm">
          {t("about.founder.role")}
        </Animation.Text>
        <Animation.Fade delay={0.35}>
          <Button
            render={
              <a
                href={ENUMs.GLOBAL.LINKEDIN_FOUNDER}
                target="_blank"
                rel="noreferrer"
              />
            }
            variant="linkedin"
            className="gap-2"
            size="lg">
            <LinkedinIcon className="size-4" />
            {t("about.founder.cta")}
          </Button>
        </Animation.Fade>
      </section>

      <section className="bg-secondary py-16 md:py-24 flex flex-col items-center text-center gap-5">
        <Animation.Text
          as="span"
          transition={{ duration: 0.5 }}
          className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
          {t("about.statement.eyebrow")}
        </Animation.Text>
        <Animation.Text
          as="h1"
          transition={{ duration: 0.75, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white max-w-3xl">
          {t("about.statement.title")}
        </Animation.Text>
        <Animation.Text
          as="p"
          transition={{ duration: 0.65, delay: 0.22 }}
          className="text-white font-semibold text-sm md:text-base max-w-2xl leading-relaxed">
          {t("about.statement.body")}
        </Animation.Text>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Animation.Slide from="left" className="flex flex-col gap-4 text-primary">
            <Animation.Text
              as="span"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
              {t("about.story.eyebrow")}
            </Animation.Text>
            <Animation.Text
              as="h2"
              transition={{ duration: 0.65, delay: 0.18 }}
              className="text-2xl md:text-4xl font-bold">
              {t("about.story.title")}
            </Animation.Text>
            <Animation.Text
              as="p"
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-sm md:text-base text-primary/70 leading-relaxed whitespace-pre-line text-justify">
              {t("about.story.body")}
            </Animation.Text>
          </Animation.Slide>
          <Animation.Slide from="right" delay={0.15}>
            <Animation.Image
              src="/images/home.jpg"
              alt=""
              className="rounded-xl aspect-[4/3] w-full"
            />
          </Animation.Slide>
        </div>
      </section>

      <section className="bg-[#F2EEE4] py-16 md:py-20">
        <Animation.Fade>
          <Animation.Text
            as="p"
            className="text-center text-primary text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
            {t("about.mission")}
          </Animation.Text>
        </Animation.Fade>
      </section>

      <PreFooterCta />
    </>
  );
};

export default About;
