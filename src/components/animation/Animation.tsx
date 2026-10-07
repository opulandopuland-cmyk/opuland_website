import { ImageProps, SectionProps, TextProps } from "@/types/types";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  Variants,
  type Transition,
} from "motion/react";
import React, { useEffect, type ReactNode } from "react";
import { useInView } from "react-intersection-observer";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const defaultViewport = { once: true, margin: "-80px" as const };

const Text: React.FC<TextProps> = ({
  as: Element = "h1",
  className = "",
  children,
  initial = { opacity: 0, y: 40 },
  whileInView = { opacity: 1, y: 0 },
  viewport = defaultViewport,
  transition = { duration: 0.7, ease: easeOut },
  ...rest
}) => {
  const MotionComponents = {
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    h4: motion.h4,
    h5: motion.h5,
    h6: motion.h6,
    li: motion.li,
    p: motion.p,
    div: motion.div,
    span: motion.span,
  };

  const MotionComponent =
    MotionComponents[Element as keyof typeof MotionComponents] || motion.div;

  return (
    <MotionComponent
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      {...rest}>
      {children}
    </MotionComponent>
  );
};

const Section = ({
  children,
  className = "",
  delay = 0,
  margin = "-80px",
}: SectionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin }}
    transition={{ duration: 0.7, delay, ease: easeOut }}
    variants={{
      hidden: { opacity: 0, y: 48 },
      visible: { opacity: 1, y: 0 },
    }}
    className={className}>
    {children}
  </motion.div>
);

const Number = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [count, value, inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  delay = 0,
  margin = "-80px",
  scaleEffect = true,
  ...rest
}) => {
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 36,
      ...(scaleEffect && { scale: 0.94 }),
    },
    visible: {
      opacity: 1,
      y: 0,
      ...(scaleEffect && { scale: 1 }),
      transition: {
        duration: 0.85,
        delay,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={imageVariants}
      className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.5, ease: easeOut }}
        {...rest}
      />
    </motion.div>
  );
};

type ContainerProps = TextProps & {
  delay?: number;
  index?: number;
  hoverLift?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  as: Element = "div",
  className = "",
  children,
  delay,
  index = 0,
  hoverLift = false,
  initial = { opacity: 0, y: 40 },
  whileInView = { opacity: 1, y: 0 },
  viewport = defaultViewport,
  transition,
  ...rest
}) => {
  const MotionComponents = {
    div: motion.div,
    article: motion.article,
  };

  const MotionComponent =
    MotionComponents[Element as keyof typeof MotionComponents] || motion.div;

  const resolvedDelay = delay ?? index * 0.1;

  return (
    <MotionComponent
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={
        transition ?? { duration: 0.65, delay: resolvedDelay, ease: easeOut }
      }
      whileHover={
        hoverLift
          ? { y: -6, transition: { duration: 0.25, ease: easeOut } }
          : undefined
      }
      {...rest}>
      {children}
    </MotionComponent>
  );
};

const Slide: React.FC<
  TextProps & { from?: "left" | "right" | "up" | "down"; delay?: number }
> = ({
  as: Element = "div",
  className = "",
  children,
  from = "left",
  delay = 0,
  viewport = defaultViewport,
  transition,
  ...rest
}) => {
  const offset =
    from === "left"
      ? { x: -70, y: 0 }
      : from === "right"
        ? { x: 70, y: 0 }
        : from === "up"
          ? { x: 0, y: 50 }
          : { x: 0, y: -40 };

  const MotionComponents: Record<string, typeof motion.div> = {
    div: motion.div,
    article: motion.article,
    section: motion.section,
  };
  const MotionComponent = MotionComponents[Element] ?? motion.div;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={
        transition ?? { duration: 0.75, delay, ease: easeOut }
      }
      {...rest}>
      {children}
    </MotionComponent>
  );
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const Stagger = ({
  children,
  className = "",
  stagger = 0.12,
  delay = 0.08,
}: StaggerProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: stagger,
          delayChildren: delay,
        },
      },
    }}>
    {children}
  </motion.div>
);

const Item: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <motion.div className={className} variants={staggerItem}>
    {children}
  </motion.div>
);

const Fade: React.FC<TextProps & { delay?: number }> = ({
  as: Element = "div",
  className = "",
  children,
  delay = 0,
  viewport = defaultViewport,
  ...rest
}) => {
  const MotionComponents: Record<string, typeof motion.div> = {
    div: motion.div,
    p: motion.p,
    span: motion.span,
    section: motion.section,
  };
  const MotionComponent = MotionComponents[Element] ?? motion.div;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      {...rest}>
      {children}
    </MotionComponent>
  );
};

const Animation = {
  Section,
  Text,
  Image,
  Number,
  Container,
  Slide,
  Stagger,
  Item,
  Fade,
};

export default Animation;
export { staggerContainer, staggerItem };
