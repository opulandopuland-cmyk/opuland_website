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
};

const ProjectCard = ({
  titleKey,
  locationKey,
  statusKey,
  tagKey,
  bodyKey,
  image,
}: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <Animation.Container className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch rounded-xl overflow-hidden bg-white shadow-md border border-primary/5">
      <div className="overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[320px]">
        <img
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 text-primary p-6 md:p-8 justify-center">
        <span className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
          {t(tagKey)}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold">{t(titleKey)}</h3>
        <p className="italic text-primary/60 text-sm">{t(locationKey)}</p>
        <Badge className="w-fit bg-yellow/20 text-primary border-yellow/40">
          {t(statusKey)}
        </Badge>
        <p className="text-sm md:text-base text-primary/70 leading-relaxed">
          {t(bodyKey)}
        </p>
      </div>
    </Animation.Container>
  );
};

export default ProjectCard;
