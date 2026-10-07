import { ENUMs } from "@/lib/enums";

export type ContactDetail = {
  id: string;
  labelKey: string;
  valueKey?: string;
  value?: string;
  href?: string;
  icon: string;
};

export type SocialLink = {
  id: string;
  labelKey: string;
  href: string;
  icon: string;
};

export const contactDetails: ContactDetail[] = [
  {
    id: "email",
    labelKey: "contact.info.email_label",
    value: ENUMs.GLOBAL.EMAIL,
    href: `mailto:${ENUMs.GLOBAL.EMAIL}`,
    icon: "Mail",
  },
  {
    id: "phone",
    labelKey: "contact.info.phone_label",
    valueKey: "contact.info.phone_value",
    href: `tel:${ENUMs.GLOBAL.PHONE.replace(/\s/g, "")}`,
    icon: "Phone",
  },
  {
    id: "whatsapp",
    labelKey: "contact.info.whatsapp_label",
    valueKey: "contact.info.whatsapp_value",
    href: ENUMs.GLOBAL.WHATSAPP_URL,
    icon: "MessageCircle",
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    labelKey: "social.linkedin",
    href: "#",
    icon: "Linkedin",
  },
  {
    id: "instagram",
    labelKey: "social.instagram",
    href: "#",
    icon: "Instagram",
  },
  {
    id: "facebook",
    labelKey: "social.facebook",
    href: "#",
    icon: "Facebook",
  },
  {
    id: "youtube",
    labelKey: "social.youtube",
    href: "#",
    icon: "Youtube",
  },
];
