import { ReactNode } from "react";

// ============================================
// UI / Component Types
// ============================================

export type ValidHTMLElements = keyof React.JSX.IntrinsicElements;

export interface SectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  margin?: string;
}

export type TextProps = {
  as?: string;
  className?: string;
  children?: ReactNode;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
  [key: string]: any;
};

export type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  margin?: string;
  scaleEffect?: boolean;
  [key: string]: any;
};

export type Section = {
  id: number;
  name: string;
  router: boolean;
  route?: string;
};
