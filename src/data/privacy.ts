export type PrivacySection = {
  id: string;
  titleKey: string;
  bodyKey: string;
  pointsKeys?: string[];
};

export const privacySections: PrivacySection[] = [
  {
    id: "intro",
    titleKey: "privacy.sections.intro.title",
    bodyKey: "privacy.sections.intro.body",
  },
  {
    id: "who",
    titleKey: "privacy.sections.who.title",
    bodyKey: "privacy.sections.who.body",
  },
  {
    id: "collect",
    titleKey: "privacy.sections.collect.title",
    bodyKey: "privacy.sections.collect.body",
    pointsKeys: [
      "privacy.sections.collect.points.p1",
      "privacy.sections.collect.points.p2",
      "privacy.sections.collect.points.p3",
      "privacy.sections.collect.points.p4",
      "privacy.sections.collect.points.p5",
    ],
  },
  {
    id: "use",
    titleKey: "privacy.sections.use.title",
    bodyKey: "privacy.sections.use.body",
    pointsKeys: [
      "privacy.sections.use.points.p1",
      "privacy.sections.use.points.p2",
      "privacy.sections.use.points.p3",
      "privacy.sections.use.points.p4",
      "privacy.sections.use.points.p5",
    ],
  },
  {
    id: "cookies",
    titleKey: "privacy.sections.cookies.title",
    bodyKey: "privacy.sections.cookies.body",
  },
  {
    id: "share",
    titleKey: "privacy.sections.share.title",
    bodyKey: "privacy.sections.share.body",
  },
  {
    id: "retain",
    titleKey: "privacy.sections.retain.title",
    bodyKey: "privacy.sections.retain.body",
  },
  {
    id: "rights",
    titleKey: "privacy.sections.rights.title",
    bodyKey: "privacy.sections.rights.body",
    pointsKeys: [
      "privacy.sections.rights.points.p1",
      "privacy.sections.rights.points.p2",
      "privacy.sections.rights.points.p3",
      "privacy.sections.rights.points.p4",
    ],
  },
  {
    id: "security",
    titleKey: "privacy.sections.security.title",
    bodyKey: "privacy.sections.security.body",
  },
  {
    id: "invest",
    titleKey: "privacy.sections.invest.title",
    bodyKey: "privacy.sections.invest.body",
  },
  {
    id: "contact",
    titleKey: "privacy.sections.contact.title",
    bodyKey: "privacy.sections.contact.body",
  },
  {
    id: "changes",
    titleKey: "privacy.sections.changes.title",
    bodyKey: "privacy.sections.changes.body",
  },
];
