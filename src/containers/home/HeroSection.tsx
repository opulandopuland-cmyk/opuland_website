import Animation from "@/components/animation/Animation";
import { Button } from "@/components/ui/button";
import { ENUMs } from "@/lib/enums";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-primary min-h-[80vh] overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <img
          src="/images/logo_without_bg.png"
          alt=""
          aria-hidden
          className="absolute -end-16 top-1/2 -translate-y-1/2 h-[90%] object-contain"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="flex flex-col justify-center gap-6">
          <Animation.Text
            as="h1"
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-2xl">
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
        </div>

        <Animation.Slide from="right" delay={0.2} className="relative w-full">
          <motion.div
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <div className="absolute -inset-3 md:-inset-4 rounded-[1.75rem] border border-yellow/35 pointer-events-none" />
            <div className="absolute -bottom-4 -start-4 md:-bottom-6 md:-start-6 size-24 md:size-32 rounded-2xl bg-yellow/15 blur-2xl pointer-events-none" />
            <div className="absolute -top-4 -end-4 md:-top-6 md:-end-6 size-20 md:size-28 rounded-full bg-white/10 blur-2xl pointer-events-none" />

            <Animation.Image
              src="/images/home.jpg"
              alt={t("home.hero.title")}
              delay={0.35}
              scaleEffect
              className="relative z-10 aspect-[4/3] w-full rounded-2xl shadow-2xl shadow-black/30 ring-1 ring-white/10"
            />

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -bottom-4 end-4 md:end-8 z-20 rounded-xl bg-white/95 backdrop-blur px-4 py-3 shadow-lg border border-yellow/20">
              <p className="text-[10px] uppercase tracking-[0.18em] text-yellow font-semibold">
                OPG
              </p>
              <p className="text-xs md:text-sm text-primary font-medium leading-snug">
                {t("home.what_we_do.tagline").replace(/"/g, "")}
              </p>
            </motion.div>
          </motion.div>
        </Animation.Slide>
      </div>
    </section>
  );
};

export default HeroSection;
