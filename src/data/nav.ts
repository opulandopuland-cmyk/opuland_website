import { ENUMs } from "@/lib/enums";

export type NavLink = {
  id: string;
  labelKey: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { id: "home", labelKey: "nav.home", href: ENUMs.PAGES.HOME },
  { id: "about", labelKey: "nav.about", href: ENUMs.PAGES.ABOUT },
  { id: "services", labelKey: "nav.services", href: ENUMs.PAGES.SERVICES },
  {
    id: "care-sector",
    labelKey: "nav.care_sector",
    href: ENUMs.PAGES.CARE_SECTOR,
  },
  { id: "projects", labelKey: "nav.projects", href: ENUMs.PAGES.PROJECTS },
  {
    id: "design-studio",
    labelKey: "nav.design_studio",
    href: ENUMs.PAGES.DESIGN_STUDIO,
  },
  { id: "invest", labelKey: "nav.invest", href: ENUMs.PAGES.INVEST },
  { id: "contact", labelKey: "nav.contact", href: ENUMs.PAGES.CONTACT },
];
