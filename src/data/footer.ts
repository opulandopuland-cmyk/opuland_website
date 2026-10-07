import { ENUMs } from "@/lib/enums";

export type FooterLink = {
  id: string;
  labelKey: string;
  href: string;
};

export type FooterColumn = {
  id: string;
  titleKey: string;
  links: FooterLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    id: "services",
    titleKey: "footer.columns.services",
    links: [
      {
        id: "sourcing",
        labelKey: "footer.links.property_sourcing",
        href: ENUMs.PAGES.SERVICES,
      },
      {
        id: "advisory",
        labelKey: "footer.links.investment_advisory",
        href: ENUMs.PAGES.INVEST,
      },
      {
        id: "planning",
        labelKey: "footer.links.planning_permission",
        href: ENUMs.PAGES.SERVICES,
      },
      {
        id: "building",
        labelKey: "footer.links.building_control",
        href: ENUMs.PAGES.SERVICES,
      },
    ],
  },
  {
    id: "company",
    titleKey: "footer.columns.company",
    links: [
      { id: "about", labelKey: "footer.links.about", href: ENUMs.PAGES.ABOUT },
      {
        id: "projects",
        labelKey: "footer.links.projects",
        href: ENUMs.PAGES.PROJECTS,
      },
      {
        id: "invest",
        labelKey: "footer.links.invest",
        href: ENUMs.PAGES.INVEST,
      },
      {
        id: "contact",
        labelKey: "footer.links.contact",
        href: ENUMs.PAGES.CONTACT,
      },
      {
        id: "care",
        labelKey: "footer.links.care",
        href: ENUMs.PAGES.CARE_SECTOR,
      },
      {
        id: "design",
        labelKey: "footer.links.design",
        href: ENUMs.PAGES.DESIGN_STUDIO,
      },
    ],
  },
];
