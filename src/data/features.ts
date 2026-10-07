export type FeaturePoint = {
  id: string;
  titleKey: string;
  bodyKey: string;
};

export const aboutFeatures: FeaturePoint[] = [
  {
    id: "off-market",
    titleKey: "home.about_opg.features.off_market.title",
    bodyKey: "home.about_opg.features.off_market.body",
  },
  {
    id: "execution",
    titleKey: "home.about_opg.features.execution.title",
    bodyKey: "home.about_opg.features.execution.body",
  },
  {
    id: "interest-free",
    titleKey: "home.about_opg.features.interest_free.title",
    bodyKey: "home.about_opg.features.interest_free.body",
  },
];
