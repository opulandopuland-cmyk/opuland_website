import Animation from "@/components/animation/Animation";
import { useTranslation } from "react-i18next";

type StatCardProps = {
  value: string;
  labelKey: string;
  index?: number;
};

const StatCard = ({ value, labelKey, index = 0 }: StatCardProps) => {
  const { t } = useTranslation();

  return (
    <Animation.Container
      index={index}
      className="flex flex-col items-center justify-center gap-2 py-6 md:py-8 text-center px-4">
      <Animation.Text
        as="span"
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, delay: index * 0.12 }}
        className="text-yellow text-3xl md:text-5xl font-bold tracking-tight">
        {value}
      </Animation.Text>
      <Animation.Text
        as="span"
        transition={{ duration: 0.5, delay: index * 0.12 + 0.15 }}
        className="text-white/80 text-xs md:text-sm uppercase tracking-wider">
        {t(labelKey)}
      </Animation.Text>
    </Animation.Container>
  );
};

export default StatCard;
