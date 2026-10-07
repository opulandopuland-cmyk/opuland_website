import Animation from "@/components/animation/Animation";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

type ProjectCardProps = {
  titleKey: string;
  locationKey: string;
  statusKey: string;
  tagKey: string;
  bodyKey: string;
  image: string;
  index?: number;
};

const ProjectCard = ({
  titleKey,
  locationKey,
  statusKey,
  tagKey,
  bodyKey,
  image,
  index = 0,
}: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <Animation.Container
      index={index}
      className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch rounded-xl overflow-hidden bg-white shadow-md border border-primary/5">
      <Animation.Image
        src={image}
        alt={t(titleKey)}
        delay={0.1}
        className="aspect-[4/3] md:aspect-auto md:min-h-[320px]"
      />
      <Animation.Slide
        from="right"
        delay={0.15}
        className="flex flex-col gap-4 text-primary p-6 md:p-8 justify-center">
        <Animation.Text
          as="span"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
          {t(tagKey)}
        </Animation.Text>
        <Animation.Text
          as="h3"
          transition={{ duration: 0.55, delay: 0.32 }}
          className="text-2xl md:text-3xl font-bold">
          {t(titleKey)}
        </Animation.Text>
        <Animation.Text
          as="p"
          transition={{ duration: 0.5, delay: 0.38 }}
          className="italic text-primary/60 text-sm">
          {t(locationKey)}
        </Animation.Text>
        <Animation.Fade delay={0.45}>
          <Badge className="w-fit bg-yellow/20 text-primary border-yellow/40">
            {t(statusKey)}
          </Badge>
        </Animation.Fade>
        <Animation.Text
          as="p"
          transition={{ duration: 0.55, delay: 0.5 }}
          className="text-sm md:text-base text-primary/70 leading-relaxed">
          {t(bodyKey)}
        </Animation.Text>
      </Animation.Slide>
    </Animation.Container>
  );
};

export default ProjectCard;
