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
  index?: number;
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
  index = 0,
}: AudienceCardProps) => {
  const { t } = useTranslation();
  const Icon = getIcon(icon);
  const PointIcon = pointIcon === "trend" ? TrendingUp : CheckCircle2;

  return (
    <Animation.Container
      index={index}
      hoverLift
      className={cn(
        "flex flex-col gap-5 p-6 md:p-8 rounded-xl h-full",
        variant === "light" && "bg-white text-primary",
        variant === "white" && "bg-white text-primary shadow-sm",
        variant === "sage" && "bg-[#EEF3EE]/80 text-primary",
        variant === "dark" && "bg-primary text-white",
        className
      )}>
      {Icon && (
        <Animation.Text
          as="div"
          initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.55, delay: index * 0.1 + 0.1 }}
          className={cn(
            "size-12 rounded-lg flex items-center justify-center",
            variant === "dark" ? "bg-white/10" : "bg-primary/10"
          )}>
          <Icon className="size-6 text-yellow" strokeWidth={1.5} />
        </Animation.Text>
      )}
      <Animation.Text
        as="span"
        transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
        className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
        {t(eyebrowKey)}
      </Animation.Text>
      <Animation.Text
        as="h3"
        transition={{ duration: 0.55, delay: index * 0.1 + 0.2 }}
        className="text-xl md:text-2xl font-bold">
        {t(titleKey)}
      </Animation.Text>
      <Animation.Text
        as="p"
        transition={{ duration: 0.55, delay: index * 0.1 + 0.26 }}
        className={cn(
          "text-sm md:text-base leading-relaxed",
          variant === "dark" ? "text-white/80" : "text-primary/70"
        )}>
        {t(bodyKey)}
      </Animation.Text>
      <ul className="flex flex-col gap-3 mt-2">
        {pointsKeys.map((key, i) => (
          <Animation.Text
            as="li"
            key={key}
            transition={{ duration: 0.45, delay: index * 0.1 + 0.3 + i * 0.06 }}
            className="flex items-start gap-3 text-sm md:text-base">
            <PointIcon className="size-5 text-yellow shrink-0 mt-0.5" />
            <span>{t(key)}</span>
          </Animation.Text>
        ))}
      </ul>
      {cta && <Animation.Fade delay={index * 0.1 + 0.45}>{cta}</Animation.Fade>}
    </Animation.Container>
  );
};

export default AudienceCard;
