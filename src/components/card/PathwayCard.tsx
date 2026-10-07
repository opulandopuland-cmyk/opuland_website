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
  index?: number;
};

const PathwayCard = ({
  eyebrowKey,
  titleKey,
  bodyKey,
  ctaKey,
  href,
  index = 0,
}: PathwayCardProps) => {
  const { t } = useTranslation();

  return (
    <Animation.Container
      index={index}
      hoverLift
      className="flex flex-col gap-4 px-4 md:px-8 py-6 md:py-8 text-primary w-full min-h-[220px] col-span-1">
      <Animation.Text
        as="span"
        transition={{ duration: 0.5, delay: index * 0.12 }}
        className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
        {t(eyebrowKey)}
      </Animation.Text>
      <Animation.Text
        as="h3"
        transition={{ duration: 0.55, delay: index * 0.12 + 0.08 }}
        className="text-xl md:text-2xl font-bold capitalize">
        {t(titleKey)}
      </Animation.Text>
      <Animation.Text
        as="p"
        transition={{ duration: 0.55, delay: index * 0.12 + 0.16 }}
        className="text-sm md:text-base text-primary/70 leading-relaxed flex-1">
        {t(bodyKey)}
      </Animation.Text>
      <Animation.Fade delay={index * 0.12 + 0.25}>
        <Button
          render={<Link to={href} />}
          className="w-fit font-semibold mt-2"
          size="lg">
          {t(ctaKey)}
        </Button>
      </Animation.Fade>
    </Animation.Container>
  );
};

export default PathwayCard;
