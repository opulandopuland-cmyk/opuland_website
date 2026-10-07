import Animation from "@/components/animation/Animation";
import { Button } from "@/components/ui/button";
import { ENUMs } from "@/lib/enums";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PreFooterCta = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-primary overflow-hidden py-16 md:py-24">
      <img
        src="/images/logo.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute end-0 top-1/2 -translate-y-1/2 h-[120%] opacity-5 object-contain"
      />
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        <Animation.Text
          as="h2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl font-bold text-white">
          {t("cta.partner.title")}
        </Animation.Text>
        <Animation.Text
          as="p"
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-white/80 text-sm md:text-base leading-relaxed">
          {t("cta.partner.body")}
        </Animation.Text>
        <Animation.Fade delay={0.25}>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
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
      </div>
    </section>
  );
};

export default PreFooterCta;
