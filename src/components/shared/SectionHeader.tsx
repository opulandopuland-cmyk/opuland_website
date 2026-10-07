import Animation from "@/components/animation/Animation";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type SectionHeaderProps = {
  eyebrowKey?: string;
  titleKey: string;
  bodyKey?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

const SectionHeader = ({
  eyebrowKey,
  titleKey,
  bodyKey,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) => {
  const { t } = useTranslation();

  return (
    <Animation.Container
      className={cn(
        "flex flex-col gap-3 mb-10 md:mb-14",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-start",
        className
      )}>
      {eyebrowKey && (
        <span className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
          {t(eyebrowKey)}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl md:text-4xl font-bold tracking-tight whitespace-pre-line",
          light ? "text-white" : "text-primary"
        )}>
        {t(titleKey)}
      </h2>
      {bodyKey && (
        <p
          className={cn(
            "text-sm md:text-base leading-relaxed max-w-2xl",
            light ? "text-white/80" : "text-primary/70"
          )}>
          {t(bodyKey)}
        </p>
      )}
    </Animation.Container>
  );
};

export default SectionHeader;
