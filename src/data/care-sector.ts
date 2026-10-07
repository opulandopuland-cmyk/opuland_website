export type CareAudienceCard = {
  id: string;
  eyebrowKey: string;
  titleKey: string;
  bodyKey: string;
  pointsKeys: string[];
  icon: string;
  variant: "light" | "dark";
};

export type JourneyStep = {
  id: string;
  step: number;
  titleKey: string;
  bodyKey: string;
};

export const careAudienceCards: CareAudienceCard[] = [
  {
    id: "operators",
    eyebrowKey: "care.audience.operators.eyebrow",
    titleKey: "care.audience.operators.title",
    bodyKey: "care.audience.operators.body",
    pointsKeys: [
      "care.audience.operators.points.p1",
      "care.audience.operators.points.p2",
      "care.audience.operators.points.p3",
      "care.audience.operators.points.p4",
    ],
    icon: "Heart",
    variant: "light",
  },
  {
    id: "investors",
    eyebrowKey: "care.audience.investors.eyebrow",
    titleKey: "care.audience.investors.title",
    bodyKey: "care.audience.investors.body",
    pointsKeys: [
      "care.audience.investors.points.p1",
      "care.audience.investors.points.p2",
      "care.audience.investors.points.p3",
      "care.audience.investors.points.p4",
    ],
    icon: "Building2",
    variant: "dark",
  },
];

export const careJourneySteps: JourneyStep[] = [
  {
    id: "step1",
    step: 1,
    titleKey: "care.journey.steps.s1.title",
    bodyKey: "care.journey.steps.s1.body",
  },
  {
    id: "step2",
    step: 2,
    titleKey: "care.journey.steps.s2.title",
    bodyKey: "care.journey.steps.s2.body",
  },
  {
    id: "step3",
    step: 3,
    titleKey: "care.journey.steps.s3.title",
    bodyKey: "care.journey.steps.s3.body",
  },
  {
    id: "step4",
    step: 4,
    titleKey: "care.journey.steps.s4.title",
    bodyKey: "care.journey.steps.s4.body",
  },
  {
    id: "step5",
    step: 5,
    titleKey: "care.journey.steps.s5.title",
    bodyKey: "care.journey.steps.s5.body",
  },
];
