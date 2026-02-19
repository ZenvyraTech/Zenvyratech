import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, slideInFromLeft, slideInFromRight, scaleIn } from '../utils/animationUtils';

const AnimatedSection = ({ children, className = '', delay = 0, variant = 'fadeInUp', direction = null }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Select animation variant based on prop
  const getAnimationProps = () => {
    switch(variant) {
      case 'slideInFromLeft':
        return {
          ...slideInFromLeft,
          transition: { ...slideInFromLeft.transition, delay }
        };
      case 'slideInFromRight':
        return {
          ...slideInFromRight,
          transition: { ...slideInFromRight.transition, delay }
        };
      case 'scaleIn':
        return {
          ...scaleIn,
          transition: { ...scaleIn.transition, delay }
        };
      case 'fadeInUp':
      default:
        return {
          ...fadeInUp,
          transition: { ...fadeInUp.transition, delay }
        };
    }
  };

  const animationProps = getAnimationProps();

  return (
    <motion.div
      ref={ref}
      initial={animationProps.initial}
      animate={inView ? animationProps.animate : {}}
      transition={animationProps.transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
