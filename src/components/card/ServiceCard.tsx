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
  index?: number;
};

const ServiceCard = ({
  titleKey,
  bodyKey,
  icon,
  variant = "white",
  className,
  index = 0,
}: ServiceCardProps) => {
  const { t } = useTranslation();
  const Icon = getIcon(icon);

  return (
    <Animation.Container
      index={index}
      hoverLift
      className={cn(
        "flex flex-col gap-3 p-6 md:p-8 rounded-xl h-full w-full col-span-1",
        variant === "white" && "bg-white text-primary shadow-sm",
        variant === "sage" && "bg-[#EEF3EE]/80 text-primary",
        variant === "dark" && "bg-primary text-white",
        className
      )}>
      {Icon && (
        <Animation.Text
          as="div"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}>
          <Icon className="size-8 text-yellow" strokeWidth={1.5} />
        </Animation.Text>
      )}
      <Animation.Text
        as="h3"
        transition={{ duration: 0.55, delay: index * 0.1 + 0.2 }}
        className={cn(
          "text-lg md:text-xl font-bold tracking-tight",
          variant === "dark" ? "text-white" : "text-primary"
        )}>
        {t(titleKey)}
      </Animation.Text>
      <Animation.Text
        as="p"
        transition={{ duration: 0.55, delay: index * 0.1 + 0.28 }}
        className={cn(
          "text-sm md:text-base leading-relaxed",
          variant === "dark" ? "text-white/80" : "text-primary/70"
        )}>
        {t(bodyKey)}
      </Animation.Text>
    </Animation.Container>
  );
};

export default ServiceCard;
