import { ImageProps, SectionProps, TextProps } from "@/types/types";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  Variants,
} from "motion/react";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

//TEXT COMPONENT
const Text: React.FC<TextProps> = ({
  as: Element = "h1",
  className = "",
  children,
  initial = { opacity: 0, y: 50 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true },
  transition = { duration: 0.6 },
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

// SECTION COMPONENT
const Section = ({
  children,
  className = "",
  delay = 0,
  margin = "-100px",
}: SectionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin }}
    transition={{ duration: 0.6, delay }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    className={`${className} body`}>
    {children}
  </motion.div>
);

//NUMBER COMPONENT
const Number = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [count, value, inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

//IMAGE COMPONENT

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  delay = 0,
  margin = "-100px",
  scaleEffect = false,
  ...rest
}) => {
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      ...(scaleEffect && { scale: 0.95 }),
    },
    visible: {
      opacity: 1,
      y: 0,
      ...(scaleEffect && { scale: 1 }),
      transition: {
        duration: 0.8,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={imageVariants}
      className={`overflow-hidden  ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        {...rest}
      />
    </motion.div>
  );
};

//CONTAINER COMPONENT
const Container: React.FC<TextProps> = ({
  as: Element = "div",
  className = "",
  children,
  initial = { opacity: 0, y: 50 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true },
  transition = { duration: 0.6 },
  ...rest
}) => {
  const MotionComponents = {
    div: motion.div,
    article: motion.article,
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

// SLIDE COMPONENT
const Slide: React.FC<TextProps & { from?: "left" | "right" }> = ({
  as: Element = "div",
  className = "",
  children,
  from = "left",
  viewport = { once: true },
  transition = { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  ...rest
}) => {
  const x = from === "left" ? -80 : 80;

  const MotionComponents: Record<string, any> = {
    div: motion.div,
    article: motion.article,
    section: motion.section,
  };
  const MotionComponent = MotionComponents[Element] ?? motion.div;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={transition}
      {...rest}>
      {children}
    </MotionComponent>
  );
};

// Compound component
const Animation = {
  Section,
  Text,
  Image,
  Number,
  Container,
  Slide,
};

export default Animation;
