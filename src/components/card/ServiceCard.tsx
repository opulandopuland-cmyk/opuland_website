import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import Animation from "@/components/animation/Animation";

type ServiceCardProps = {
  titleKey: string;
  bodyKey: string;
  icon?: string;
  variant?: "white" | "sage" | "dark";
  className?: string;
};

const ServiceCard = ({
  titleKey,
  bodyKey,
  icon,
  variant = "white",
  className,
}: ServiceCardProps) => {
  const { t } = useTranslation();
  const Icon = getIcon(icon);

  return (
    <Animation.Container
      className={cn(
        "flex flex-col gap-3 p-6 md:p-8 rounded-xl h-full w-full col-span-1",
        variant === "white" && "bg-white text-primary shadow-sm",
        variant === "sage" && "bg-[#EEF3EE]/80 text-primary",
        variant === "dark" && "bg-primary text-white",
        className
      )}>
      {Icon && <Icon className="size-8 text-yellow" strokeWidth={1.5} />}
      <h3
        className={cn(
          "text-lg md:text-xl font-bold tracking-tight",
          variant === "dark" ? "text-white" : "text-primary"
        )}>
        {t(titleKey)}
      </h3>
      <p
        className={cn(
          "text-sm md:text-base leading-relaxed",
          variant === "dark" ? "text-white/80" : "text-primary/70"
        )}>
        {t(bodyKey)}
      </p>
    </Animation.Container>
  );
};

export default ServiceCard;
