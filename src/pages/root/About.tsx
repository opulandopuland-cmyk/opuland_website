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
        <div className="rounded-xl overflow-hidden size-48 md:size-64">
          <img
            src="/images/founder.jpeg"
            alt={t("about.founder.name")}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          {t("about.founder.name")}
        </h2>
        <p className="text-primary/60 text-sm">{t("about.founder.role")}</p>
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
      </section>

      <section className="bg-secondary py-16 md:py-24 flex flex-col items-center text-center gap-5">
        <span className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
          {t("about.statement.eyebrow")}
        </span>
        <Animation.Text
          as="h1"
          className="text-3xl md:text-5xl font-bold text-white max-w-3xl">
          {t("about.statement.title")}
        </Animation.Text>
        <p className="text-white font-semibold text-sm md:text-base max-w-2xl leading-relaxed">
          {t("about.statement.body")}
        </p>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-4 text-primary">
            <span className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
              {t("about.story.eyebrow")}
            </span>
            <Animation.Text as="h2" className="text-2xl md:text-4xl font-bold">
              {t("about.story.title")}
            </Animation.Text>
            <p className="text-sm md:text-base text-primary/70 leading-relaxed whitespace-pre-line text-justify">
              {t("about.story.body")}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="/images/home.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F2EEE4] py-16 md:py-20">
        <p className="text-center text-primary text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
          {t("about.mission")}
        </p>
      </section>

      <PreFooterCta />
    </>
  );
};

export default About;
