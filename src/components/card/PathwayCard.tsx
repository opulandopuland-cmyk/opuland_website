import { Button } from "@/components/ui/button";
import Animation from "@/components/animation/Animation";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type PathwayCardProps = {
  eyebrowKey: string;
  titleKey: string;
  bodyKey: string;
  ctaKey: string;
  href: string;
};

const PathwayCard = ({
  eyebrowKey,
  titleKey,
  bodyKey,
  ctaKey,
  href,
}: PathwayCardProps) => {
  const { t } = useTranslation();

  return (
    <Animation.Container className="flex flex-col gap-4 px-4 md:px-8 py-6 md:py-8 text-primary w-full min-h-[220px] col-span-1">
      <span className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
        {t(eyebrowKey)}
      </span>
      <h3 className="text-xl md:text-2xl font-bold capitalize">
        {t(titleKey)}
      </h3>
      <p className="text-sm md:text-base text-primary/70 leading-relaxed flex-1">
        {t(bodyKey)}
      </p>
      <Button
        render={<Link to={href} />}
        className="w-fit font-semibold mt-2"
        size="lg">
        {t(ctaKey)}
      </Button>
    </Animation.Container>
  );
};

export default PathwayCard;
