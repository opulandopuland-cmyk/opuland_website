import Animation from "@/components/animation/Animation";
import { Button } from "@/components/ui/button";
import { ENUMs } from "@/lib/enums";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary min-h-[80vh] flex flex-col justify-center gap-6 py-20 md:py-28">
      <Animation.Text
        as="h1"
        initial={{ opacity: 0, y: 56 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.05 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl">
        {t("home.hero.title")}
      </Animation.Text>
      <Animation.Text
        as="p"
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl">
        {t("home.hero.body")}
      </Animation.Text>
      <Animation.Fade delay={0.35}>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Button
            render={<Link to={ENUMs.PAGES.ABOUT} />}
            className="w-fit"
            size="lg">
            {t("home.hero.cta_primary")}
          </Button>
          <Button
            render={
              <a
                href={ENUMs.GLOBAL.WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              />
            }
            variant="whatsapp"
            className="w-fit"
            size="lg">
            <FaWhatsapp className="size-5" />
            {t("cta.whatsapp")}
          </Button>
        </div>
      </Animation.Fade>
    </section>
  );
};

export default HeroSection;
