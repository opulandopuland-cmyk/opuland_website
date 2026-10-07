import Animation from "@/components/animation/Animation";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

type StepCardProps = {
  step: number | string;
  titleKey: string;
  bodyKey: string;
  variant?: "numbered" | "padded";
  className?: string;
  index?: number;
};

const StepCard = ({
  step,
  titleKey,
  bodyKey,
  variant = "numbered",
  className,
  index = 0,
}: StepCardProps) => {
  const { t } = useTranslation();

  return (
    <Animation.Container
      index={index}
      hoverLift
      className={cn(
        "flex flex-col gap-3 text-primary",
        variant === "padded" && "bg-[#EEF3EE] p-6 rounded-xl",
        className
      )}>
      <Animation.Text
        as="span"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="text-yellow text-2xl md:text-3xl font-bold">
        {typeof step === "number" ? (
          <span className="inline-flex size-10 items-center justify-center rounded-full border-2 border-yellow text-base">
            {step}
          </span>
        ) : (
          step
        )}
      </Animation.Text>
      <Animation.Text
        as="h3"
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
        className="text-lg font-bold">
        {t(titleKey)}
      </Animation.Text>
      <Animation.Text
        as="p"
        transition={{ duration: 0.5, delay: index * 0.1 + 0.18 }}
        className="text-sm text-primary/70 leading-relaxed">
        {t(bodyKey)}
      </Animation.Text>
    </Animation.Container>
  );
};

export default StepCard;
