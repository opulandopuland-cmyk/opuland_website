export type ServiceCard = {
  id: string;
  titleKey: string;
  bodyKey: string;
  icon?: string;
};

export type DualServiceCard = {
  id: string;
  eyebrowKey: string;
  titleKey: string;
  bodyKey: string;
  pointsKeys: string[];
  ctaKey: string;
  href: string;
  variant: "light" | "dark";
};

export const whatWeDoServices: ServiceCard[] = [
  {
    id: "development",
    titleKey: "home.what_we_do.cards.development.title",
    bodyKey: "home.what_we_do.cards.development.body",
    icon: "Building2",
  },
  {
    id: "planning",
    titleKey: "home.what_we_do.cards.planning.title",
    bodyKey: "home.what_we_do.cards.planning.body",
    icon: "Ruler",
  },
  {
    id: "care",
    titleKey: "home.what_we_do.cards.care.title",
    bodyKey: "home.what_we_do.cards.care.body",
    icon: "Heart",
  },
  {
    id: "design",
    titleKey: "home.what_we_do.cards.design.title",
    bodyKey: "home.what_we_do.cards.design.body",
    icon: "Palette",
  },
];

export const consultancyServices: ServiceCard[] = [
  {
    id: "planning-apps",
    titleKey: "services.consultancy.cards.planning.title",
    bodyKey: "services.consultancy.cards.planning.body",
    icon: "MapPin",
  },
  {
    id: "pre-app",
    titleKey: "services.consultancy.cards.pre_app.title",
    bodyKey: "services.consultancy.cards.pre_app.body",
    icon: "Lightbulb",
  },
  {
    id: "qs",
    titleKey: "services.consultancy.cards.qs.title",
    bodyKey: "services.consultancy.cards.qs.body",
    icon: "Calculator",
  },
  {
    id: "procurement",
    titleKey: "services.consultancy.cards.procurement.title",
    bodyKey: "services.consultancy.cards.procurement.body",
    icon: "Users",
  },
  {
    id: "contract-admin",
    titleKey: "services.consultancy.cards.contract.title",
    bodyKey: "services.consultancy.cards.contract.body",
    icon: "FileText",
  },
  {
    id: "bank-monitoring",
    titleKey: "services.consultancy.cards.bank.title",
    bodyKey: "services.consultancy.cards.bank.body",
    icon: "Landmark",
  },
];

export const advisoryServices: ServiceCard[] = [
  {
    id: "sourcing",
    titleKey: "services.advisory.cards.sourcing.title",
    bodyKey: "services.advisory.cards.sourcing.body",
  },
  {
    id: "lease",
    titleKey: "services.advisory.cards.lease.title",
    bodyKey: "services.advisory.cards.lease.body",
  },
  {
    id: "valuations",
    titleKey: "services.advisory.cards.valuations.title",
    bodyKey: "services.advisory.cards.valuations.body",
  },
  {
    id: "liaison",
    titleKey: "services.advisory.cards.liaison.title",
    bodyKey: "services.advisory.cards.liaison.body",
  },
  {
    id: "project-mgmt",
    titleKey: "services.advisory.cards.project_mgmt.title",
    bodyKey: "services.advisory.cards.project_mgmt.body",
  },
  {
    id: "due-diligence",
    titleKey: "services.advisory.cards.due_diligence.title",
    bodyKey: "services.advisory.cards.due_diligence.body",
  },
];

export const developmentAcquisitionCards: DualServiceCard[] = [
  {
    id: "sellers",
    eyebrowKey: "services.development.sellers.eyebrow",
    titleKey: "services.development.sellers.title",
    bodyKey: "services.development.sellers.body",
    pointsKeys: [
      "services.development.sellers.points.p1",
      "services.development.sellers.points.p2",
      "services.development.sellers.points.p3",
    ],
    ctaKey: "services.development.sellers.cta",
    href: "/contact",
    variant: "light",
  },
  {
    id: "investors",
    eyebrowKey: "services.development.investors.eyebrow",
    titleKey: "services.development.investors.title",
    bodyKey: "services.development.investors.body",
    pointsKeys: [
      "services.development.investors.points.p1",
      "services.development.investors.points.p2",
      "services.development.investors.points.p3",
      "services.development.investors.points.p4",
    ],
    ctaKey: "services.development.investors.cta",
    href: "/invest#register",
    variant: "dark",
  },
];
