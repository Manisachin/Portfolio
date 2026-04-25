import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loader-wrapper">
      <motion.div 
        className="loader-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        M <span className="text-accent">.</span>
      </motion.div>
      <motion.div 
        className="loader-bar"
        initial={{ width: 0 }}
        animate={{ width: "150px" }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default Loader;

