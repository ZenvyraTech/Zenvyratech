import { motion } from 'framer-motion';

const HoverAnimation = ({ children, className = '', scale = 1.05, duration = 0.3 }) => {
  return (
    <motion.div
      whileHover={{ scale: scale, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HoverAnimation;