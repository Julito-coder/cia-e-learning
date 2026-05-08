import type { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export const scalePop: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

export const hoverLift = {
  rest:  { y: 0,  scale: 1, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } },
  hover: { y: -4, scale: 1.01, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } },
};

export const xpBurst: Variants = {
  hidden: { opacity: 1, x: 0, y: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: [1, 1, 0],
    x: Math.cos((i / 8) * Math.PI * 2) * 60,
    y: Math.sin((i / 8) * Math.PI * 2) * 60,
    scale: [0, 1, 0.5],
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
};