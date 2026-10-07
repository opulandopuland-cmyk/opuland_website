import Animation from "@/components/animation/Animation";
import { Button } from "@/components/ui/button";
import { ENUMs } from "@/lib/enums";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ReadySection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary py-16 md:py-20 flex flex-col items-center text-center gap-5">
      <Animation.Text
        as="h2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-4xl font-bold text-white">
        {t("home.ready.title")}
      </Animation.Text>
      <Animation.Text
        as="p"
        transition={{ duration: 0.6, delay: 0.12 }}
        className="text-white/80 text-sm md:text-base max-w-xl">
        {t("home.ready.body")}
      </Animation.Text>
      <Animation.Fade delay={0.25}>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button render={<Link to={ENUMs.PAGES.CONTACT} />} size="lg">
            {t("cta.discuss")}
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
            size="lg">
            <FaWhatsapp className="size-5" />
            {t("cta.whatsapp")}
          </Button>
        </div>
      </Animation.Fade>
    </section>
  );
};

export default ReadySection;
