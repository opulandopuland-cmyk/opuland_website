import Animation from "@/components/animation/Animation";
import { useTranslation } from "react-i18next";

type FeatureCardProps = {
  titleKey: string;
  bodyKey: string;
};

const FeatureCard = ({ titleKey, bodyKey }: FeatureCardProps) => {
  const { t } = useTranslation();

  return (
    <Animation.Container className="flex flex-col gap-1 text-primary border-s-2 border-yellow ps-4">
      <h4 className="text-sm font-bold uppercase tracking-wider text-yellow">
        {t(titleKey)}
      </h4>
      <p className="text-sm text-primary/70">{t(bodyKey)}</p>
    </Animation.Container>
  );
};

export default FeatureCard;
