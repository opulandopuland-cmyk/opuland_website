import { Button } from "@/components/ui/button";
import { LinkedinIcon } from "@/components/icons/SocialIcons";
import { ENUMs } from "@/lib/enums";
import { useTranslation } from "react-i18next";

const FounderSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-6 md:gap-10 items-center max-w-5xl">
        <div className="rounded-xl overflow-hidden aspect-square w-full max-w-[280px] md:max-w-none mx-auto md:mx-0">
          <img
            src="/images/founder.jpeg"
            alt={t("home.founder.name")}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 text-primary">
          <span className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
            {t("home.founder.eyebrow")}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold">
            {t("home.founder.name")}
          </h3>
          <p className="text-primary/60 text-sm">{t("home.founder.role")}</p>
          <p className="text-sm md:text-base text-primary/70 leading-relaxed">
            {t("home.founder.body")}
          </p>
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
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
