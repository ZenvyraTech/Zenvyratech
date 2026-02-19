import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, animateOnHover = true }) => {
  return (
    <motion.div
      whileHover={
        hover ? {
          y: -5,
          scale: 1.02,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          transition: { duration: 0.3 }
        } : {}
      }
      whileTap={animateOnHover ? { scale: 0.98 } : {}}
      transition={{ duration: 0.3 }}
      className={`glass-effect rounded-lg p-6 transition-all duration-300 ${
        hover ? 'hover:border-accent/50' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
