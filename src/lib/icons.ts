import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import {
  Building2,
  Calculator,
  Clapperboard,
  Compass,
  FileText,
  Gem,
  Handshake,
  Heart,
  Landmark,
  Layers,
  Lightbulb,
  type LucideIcon,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  Ruler,
  Scan,
  Sofa,
  Users,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type AnyIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

const iconMap: Record<string, AnyIcon> = {
  Building2,
  Ruler,
  Heart,
  Palette,
  MapPin,
  Lightbulb,
  Calculator,
  Users,
  FileText,
  Landmark,
  Layers,
  Sofa,
  Clapperboard,
  Scan,
  Compass,
  Handshake,
  Gem,
  Mail,
  Phone,
  MessageCircle,
  Linkedin: LinkedinIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Youtube: YoutubeIcon,
};

export const getIcon = (name?: string): AnyIcon | null => {
  if (!name) return null;
  return iconMap[name] ?? null;
};
