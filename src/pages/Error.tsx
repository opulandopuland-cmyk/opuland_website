import { Link, useRouteError } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Animation from "@/components/animation/Animation";

export default function Error() {
  const error: any = useRouteError();
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
          } text-4xl md:text-5xl lg:text-7xl font-bold uppercase text-foreground mb-4`}>
          {t("error.page_title")}
        </Animation.Text>

        <Animation.Text
          as="p"
          className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground mb-6 max-w-2xl">
          {t("error.page_subtitle")}
        </Animation.Text>

        {error?.message && (
          <Animation.Text
            as="div"
            className="mt-8 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg max-w-2xl">
            <p className="text-sm font-semibold text-foreground mb-2">
              {t("error.error_details")}:
            </p>
            <p className="text-sm text-muted-foreground font-mono break-words">
              {error.message}
            </p>
          </Animation.Text>
        )}

        <div className="flex items-center justify-center mt-10">
          <Link
            to="/"
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 overflow-hidden">
            <span className="relative z-10">{t("error.go_home")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </main>
  );
}
