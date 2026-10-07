import Animation from "@/components/animation/Animation";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type PageHeroProps = {
  eyebrowKey?: string;
  titleKey: string;
  bodyKey?: string;
  children?: React.ReactNode;
  variant?: "hero" | "deep";
  className?: string;
  eyebrowBelow?: boolean;
};

const PageHero = ({
  eyebrowKey,
  titleKey,
  bodyKey,
  children,
  variant = "hero",
  className,
  eyebrowBelow = false,
}: PageHeroProps) => {
  const { t } = useTranslation();

  return (
    <section
      className={cn(
        "hero-section flex flex-col items-center justify-center text-center gap-5 py-20 md:py-28",
        variant === "hero" && "bg-secondary",
        variant === "deep" && "bg-primary",
        className
      )}>
      {!eyebrowBelow && eyebrowKey && (
        <Animation.Text
          as="span"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
          {t(eyebrowKey)}
        </Animation.Text>
      )}
      <Animation.Text
        as="h1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl whitespace-pre-line">
        {t(titleKey)}
      </Animation.Text>
      {eyebrowBelow && eyebrowKey && (
        <Animation.Text
          as="span"
          transition={{ duration: 0.5, delay: 0.22 }}
          className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
          {t(eyebrowKey)}
        </Animation.Text>
      )}
      {bodyKey && (
        <Animation.Text
          as="p"
          transition={{ duration: 0.65, delay: 0.28 }}
          className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl whitespace-pre-line">
          {t(bodyKey)}
        </Animation.Text>
      )}
      {children && (
        <Animation.Fade delay={0.4} className="mt-1">
          {children}
        </Animation.Fade>
      )}
    </section>
  );
};

export default PageHero;
