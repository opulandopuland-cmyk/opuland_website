export type DesignService = {
  id: string;
  titleKey: string;
  bodyKey: string;
  icon: string;
};

export type ProcessStep = {
  id: string;
  step: string;
  titleKey: string;
  bodyKey: string;
};

export type PortfolioItem = {
  id: string;
  titleKey: string;
  image: string;
  span?: "full" | "half" | "third";
};

export const designServices: DesignService[] = [
  {
    id: "rendering",
    titleKey: "design.services.cards.rendering.title",
    bodyKey: "design.services.cards.rendering.body",
    icon: "Layers",
  },
  {
    id: "interior",
    titleKey: "design.services.cards.interior.title",
    bodyKey: "design.services.cards.interior.body",
    icon: "Sofa",
  },
  {
    id: "cgi",
    titleKey: "design.services.cards.cgi.title",
    bodyKey: "design.services.cards.cgi.body",
    icon: "Clapperboard",
  },
  {
    id: "site-plans",
    titleKey: "design.services.cards.site_plans.title",
    bodyKey: "design.services.cards.site_plans.body",
    icon: "MapPin",
  },
  {
    id: "scans",
    titleKey: "design.services.cards.scans.title",
    bodyKey: "design.services.cards.scans.body",
    icon: "Scan",
  },
  {
    id: "consultancy",
    titleKey: "design.services.cards.consultancy.title",
    bodyKey: "design.services.cards.consultancy.body",
    icon: "Palette",
  },
];

export const designProcessSteps: ProcessStep[] = [
  {
    id: "discover",
    step: "01",
    titleKey: "design.process.steps.discover.title",
    bodyKey: "design.process.steps.discover.body",
  },
  {
    id: "design",
    step: "02",
    titleKey: "design.process.steps.design.title",
    bodyKey: "design.process.steps.design.body",
  },
  {
    id: "create",
    step: "03",
    titleKey: "design.process.steps.create.title",
    bodyKey: "design.process.steps.create.body",
  },
  {
    id: "deliver",
    step: "04",
    titleKey: "design.process.steps.deliver.title",
    bodyKey: "design.process.steps.deliver.body",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    titleKey: "design.portfolio.items.p1",
    image: "/images/projects/project-1.jpg",
    span: "full",
  },
  {
    id: "p2",
    titleKey: "design.portfolio.items.p2",
    image: "/images/projects/project-2.jpg",
    span: "third",
  },
  {
    id: "p3",
    titleKey: "design.portfolio.items.p3",
    image: "/images/projects/project-3.jpg",
    span: "third",
  },
  {
    id: "p4",
    titleKey: "design.portfolio.items.p4",
    image: "/images/projects/project-4.jpg",
    span: "third",
  },
  {
    id: "p5",
    titleKey: "design.portfolio.items.p5",
    image: "/images/projects/project-5.jpg",
    span: "half",
  },
  {
    id: "p6",
    titleKey: "design.portfolio.items.p6",
    image: "/images/projects/project-6.jpg",
    span: "half",
  },
];
