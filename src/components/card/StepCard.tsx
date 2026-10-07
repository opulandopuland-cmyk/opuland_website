import Animation from "@/components/animation/Animation";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

type StepCardProps = {
  step: number | string;
  titleKey: string;
  bodyKey: string;
  variant?: "numbered" | "padded";
  className?: string;
};

const StepCard = ({
  step,
  titleKey,
  bodyKey,
  variant = "numbered",
  className,
}: StepCardProps) => {
  const { t } = useTranslation();

  return (
    <Animation.Container
      className={cn(
        "flex flex-col gap-3 text-primary",
        variant === "padded" && "bg-[#EEF3EE] p-6 rounded-xl",
        className
      )}>
      <span className="text-yellow text-2xl md:text-3xl font-bold">
        {typeof step === "number" ? (
          <span className="inline-flex size-10 items-center justify-center rounded-full border-2 border-yellow text-base">
            {step}
          </span>
        ) : (
          step
        )}
      </span>
      <h3 className="text-lg font-bold">{t(titleKey)}</h3>
      <p className="text-sm text-primary/70 leading-relaxed">{t(bodyKey)}</p>
    </Animation.Container>
  );
};

export default StepCard;
