import { ENUMs } from "@/lib/enums";

export type AudiencePathway = {
  id: string;
  eyebrowKey: string;
  titleKey: string;
  bodyKey: string;
  ctaKey: string;
  href: string;
};

export const audiencePathways: AudiencePathway[] = [
  {
    id: "landowners",
    eyebrowKey: "home.pathways.landowners.eyebrow",
    titleKey: "home.pathways.landowners.title",
    bodyKey: "home.pathways.landowners.body",
    ctaKey: "home.pathways.landowners.cta",
    href: ENUMs.PAGES.CONTACT,
  },
  {
    id: "investors",
    eyebrowKey: "home.pathways.investors.eyebrow",
    titleKey: "home.pathways.investors.title",
    bodyKey: "home.pathways.investors.body",
    ctaKey: "home.pathways.investors.cta",
    href: ENUMs.PAGES.INVEST,
  },
  {
    id: "developers",
    eyebrowKey: "home.pathways.developers.eyebrow",
    titleKey: "home.pathways.developers.title",
    bodyKey: "home.pathways.developers.body",
    ctaKey: "home.pathways.developers.cta",
    href: ENUMs.PAGES.SERVICES,
  },
];
