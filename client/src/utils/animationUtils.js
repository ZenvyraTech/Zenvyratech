// Animation utilities for enhanced visual effects
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }
};

export const textVariant = (delay) => {
  return {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay
      }
    }
  }
};

export const imageVariant = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      duration: 0.5,
      ease: "easeInOut" 
    } 
  },
  exit: { opacity: 0 }
};