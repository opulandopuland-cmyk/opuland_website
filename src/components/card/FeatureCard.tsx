import Animation from "@/components/animation/Animation";
import { useTranslation } from "react-i18next";

type FeatureCardProps = {
  titleKey: string;
  bodyKey: string;
  index?: number;
};

const FeatureCard = ({ titleKey, bodyKey, index = 0 }: FeatureCardProps) => {
  const { t } = useTranslation();

  return (
    <Animation.Slide
      from="left"
      delay={index * 0.12}
      className="flex flex-col gap-1 text-primary border-s-2 border-yellow ps-4">
      <Animation.Text
        as="h4"
        transition={{ duration: 0.45, delay: index * 0.12 + 0.05 }}
        className="text-sm font-bold uppercase tracking-wider text-yellow">
        {t(titleKey)}
      </Animation.Text>
      <Animation.Text
        as="p"
        transition={{ duration: 0.45, delay: index * 0.12 + 0.12 }}
        className="text-sm text-primary/70">
        {t(bodyKey)}
      </Animation.Text>
    </Animation.Slide>
  );
};

export default FeatureCard;
