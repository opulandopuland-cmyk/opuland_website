import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Animation from "@/components/animation/Animation";

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";

  return (
    <main className="relative w-full min-h-screen bg-background overflow-hidden">
      <div className="fading-squares-container absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <Animation.Text
          as="h1"
          className={`${
            isEn ? "hero-text" : ""
          } text-8xl md:text-9xl lg:text-[12rem] font-bold text-foreground/10 mb-4`}>
          {t("not_found.page_title")}
        </Animation.Text>

        <Animation.Text
          as="h2"
          className={`${
            isEn ? "hero-text" : ""
          } text-3xl md:text-4xl lg:text-6xl font-bold uppercase text-foreground mb-6`}>
          {t("not_found.page_subtitle")}
        </Animation.Text>

        <Animation.Text
          as="p"
          className="text-base md:text-lg lg:text-xl font-medium text-muted-foreground mb-12 max-w-2xl">
          {t("not_found.page_description")}
        </Animation.Text>

        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 overflow-hidden">
            <span className="relative z-10">{t("not_found.go_home")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </main>
  );
}
