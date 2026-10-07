export type WhyInvestCard = {
  id: string;
  titleKey: string;
  bodyKey: string;
  icon: string;
};

export type PartnerChip = {
  id: string;
  labelKey: string;
};

export type InvestStrategy = {
  id: string;
  eyebrowKey: string;
  titleKey: string;
  subtitleKey: string;
  bodyKey: string;
  pointsKeys: string[];
  ctaKey: string;
  href: string;
  variant: "light" | "dark";
};

export type InvestProcessStep = {
  id: string;
  step: number;
  titleKey: string;
  bodyKey: string;
};

export const whyInvestCards: WhyInvestCard[] = [
  {
    id: "planning",
    titleKey: "invest.why.cards.planning.title",
    bodyKey: "invest.why.cards.planning.body",
    icon: "Compass",
  },
  {
    id: "asset",
    titleKey: "invest.why.cards.asset.title",
    bodyKey: "invest.why.cards.asset.body",
    icon: "Landmark",
  },
  {
    id: "aligned",
    titleKey: "invest.why.cards.aligned.title",
    bodyKey: "invest.why.cards.aligned.body",
    icon: "Handshake",
  },
  {
    id: "selective",
    titleKey: "invest.why.cards.selective.title",
    bodyKey: "invest.why.cards.selective.body",
    icon: "Gem",
  },
];

export const partnerChips: PartnerChip[] = [
  { id: "hnwi", labelKey: "invest.partners.chips.hnwi" },
  { id: "family", labelKey: "invest.partners.chips.family" },
  { id: "business", labelKey: "invest.partners.chips.business" },
  { id: "professional", labelKey: "invest.partners.chips.professional" },
  { id: "property", labelKey: "invest.partners.chips.property" },
  { id: "overseas", labelKey: "invest.partners.chips.overseas" },
];

export const investStrategies: InvestStrategy[] = [
  {
    id: "value",
    eyebrowKey: "invest.strategies.value.eyebrow",
    titleKey: "invest.strategies.value.title",
    subtitleKey: "invest.strategies.value.subtitle",
    bodyKey: "invest.strategies.value.body",
    pointsKeys: [
      "invest.strategies.value.points.p1",
      "invest.strategies.value.points.p2",
      "invest.strategies.value.points.p3",
      "invest.strategies.value.points.p4",
      "invest.strategies.value.points.p5",
      "invest.strategies.value.points.p6",
    ],
    ctaKey: "invest.strategies.value.cta",
    href: "#register",
    variant: "light",
  },
  {
    id: "hold",
    eyebrowKey: "invest.strategies.hold.eyebrow",
    titleKey: "invest.strategies.hold.title",
    subtitleKey: "invest.strategies.hold.subtitle",
    bodyKey: "invest.strategies.hold.body",
    pointsKeys: [
      "invest.strategies.hold.points.p1",
      "invest.strategies.hold.points.p2",
      "invest.strategies.hold.points.p3",
      "invest.strategies.hold.points.p4",
    ],
    ctaKey: "invest.strategies.hold.cta",
    href: "#register",
    variant: "dark",
  },
];

export const investProcessSteps: InvestProcessStep[] = [
  {
    id: "register",
    step: 1,
    titleKey: "invest.process.steps.s1.title",
    bodyKey: "invest.process.steps.s1.body",
  },
  {
    id: "conversation",
    step: 2,
    titleKey: "invest.process.steps.s2.title",
    bodyKey: "invest.process.steps.s2.body",
  },
  {
    id: "diligence",
    step: 3,
    titleKey: "invest.process.steps.s3.title",
    bodyKey: "invest.process.steps.s3.body",
  },
  {
    id: "opportunities",
    step: 4,
    titleKey: "invest.process.steps.s4.title",
    bodyKey: "invest.process.steps.s4.body",
  },
];
