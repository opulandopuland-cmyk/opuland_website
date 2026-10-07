import Animation from "@/components/animation/Animation";
import { useTranslation } from "react-i18next";

type StatCardProps = {
  value: string;
  labelKey: string;
};

const StatCard = ({ value, labelKey }: StatCardProps) => {
  const { t } = useTranslation();

  return (
    <Animation.Container className="flex flex-col items-center justify-center gap-2 py-6 md:py-8 text-center px-4">
      <span className="text-yellow text-3xl md:text-5xl font-bold tracking-tight">
        {value}
      </span>
      <span className="text-white/80 text-xs md:text-sm uppercase tracking-wider">
        {t(labelKey)}
      </span>
    </Animation.Container>
  );
};

export default StatCard;
