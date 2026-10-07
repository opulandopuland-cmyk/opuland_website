import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import Animation from "@/components/animation/Animation";
import { CheckCircle2, TrendingUp } from "lucide-react";

type AudienceCardProps = {
  eyebrowKey: string;
  titleKey: string;
  bodyKey: string;
  pointsKeys: string[];
  icon?: string;
  variant?: "light" | "dark" | "white" | "sage";
  pointIcon?: "check" | "trend";
  cta?: React.ReactNode;
  className?: string;
};

const AudienceCard = ({
  eyebrowKey,
  titleKey,
  bodyKey,
  pointsKeys,
  icon,
  variant = "light",
  pointIcon = "check",
  cta,
  className,
}: AudienceCardProps) => {
  const { t } = useTranslation();
  const Icon = getIcon(icon);
  const PointIcon = pointIcon === "trend" ? TrendingUp : CheckCircle2;

  return (
    <Animation.Container
      className={cn(
        "flex flex-col gap-5 p-6 md:p-8 rounded-xl h-full",
        variant === "light" && "bg-white text-primary",
        variant === "white" && "bg-white text-primary shadow-sm",
        variant === "sage" && "bg-sage text-primary",
        variant === "dark" && "bg-primary text-white",
        className
      )}>
      {Icon && (
        <div
          className={cn(
            "size-12 rounded-lg flex items-center justify-center",
            variant === "dark" ? "bg-white/10" : "bg-primary/10"
          )}>
          <Icon className="size-6 text-yellow" strokeWidth={1.5} />
        </div>
      )}
      <span className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
        {t(eyebrowKey)}
      </span>
      <h3 className="text-xl md:text-2xl font-bold">{t(titleKey)}</h3>
      <p
        className={cn(
          "text-sm md:text-base leading-relaxed",
          variant === "dark" ? "text-white/80" : "text-primary/70"
        )}>
        {t(bodyKey)}
      </p>
      <ul className="flex flex-col gap-3 mt-2">
        {pointsKeys.map((key) => (
          <li key={key} className="flex items-start gap-3 text-sm md:text-base">
            <PointIcon className="size-5 text-yellow shrink-0 mt-0.5" />
            <span>{t(key)}</span>
          </li>
        ))}
      </ul>
      {cta}
    </Animation.Container>
  );
};

export default AudienceCard;
