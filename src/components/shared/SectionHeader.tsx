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
    <Animation.Section
      className={cn(
        "flex flex-col gap-3 mb-10 md:mb-14",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-start",
        className
      )}>
      {eyebrowKey && (
        <Animation.Text
          as="span"
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
          {t(eyebrowKey)}
        </Animation.Text>
      )}
      <Animation.Text
        as="h2"
        transition={{ duration: 0.65, delay: 0.12 }}
        className={cn(
          "text-2xl md:text-4xl font-bold tracking-tight whitespace-pre-line",
          light ? "text-white" : "text-primary"
        )}>
        {t(titleKey)}
      </Animation.Text>
      {bodyKey && (
        <Animation.Text
          as="p"
          transition={{ duration: 0.6, delay: 0.22 }}
          className={cn(
            "text-sm md:text-base leading-relaxed max-w-2xl",
            light ? "text-white/80" : "text-primary/70"
          )}>
          {t(bodyKey)}
        </Animation.Text>
      )}
    </Animation.Section>
  );
};

export default SectionHeader;
