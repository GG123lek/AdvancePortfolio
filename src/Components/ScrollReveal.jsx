// Create this as Components/ScrollReveal.js
import React from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.8,
  distance = 50,
  className = "",
  once = true,
  amount = 0.3
}) => {
  const directions = {
    up: { opacity: 0, y: distance },
    down: { opacity: 0, y: -distance },
    left: { opacity: 0, x: distance },
    right: { opacity: 0, x: -distance },
    scale: { opacity: 0, scale: 0.8 },
    fade: { opacity: 0 }
  };

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1
  };

  return (
    <motion.div
      className={className}
      initial={directions[direction]}
      whileInView={animate}
      transition={{ duration, delay }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;