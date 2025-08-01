import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  splitLevelClassName?: string;
  staggerFrom?: 'first' | 'last' | 'center';
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
  staggerDuration?: number;
  rotationInterval?: number;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  mainClassName = '',
  splitLevelClassName = '',
  staggerFrom = 'first',
  initial = { y: '100%' },
  animate = { y: 0 },
  exit = { y: '-120%' },
  transition = { type: 'spring', damping: 30, stiffness: 400 },
  staggerDuration = 0.025,
  rotationInterval = 2000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(timer);
  }, [texts.length, rotationInterval]);

  const getStaggerOrder = (index: number, length: number): number => {
    if (staggerFrom === 'first') {
      return index * staggerDuration;
    } else if (staggerFrom === 'last') {
      return (length - 1 - index) * staggerDuration;
    } else if (staggerFrom === 'center') {
      const middle = Math.floor(length / 2);
      return Math.abs(middle - index) * staggerDuration;
    }
    return index * staggerDuration;
  };

  const currentText = texts[currentIndex];
  const letters = currentText.split('');

  return (
    <div className={`flex flex-row ${mainClassName}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="flex flex-row"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {letters.map((letter, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              className={`inline-block ${splitLevelClassName}`}
              variants={{
                initial: initial || {},
                animate: {
                  ...(animate as object || {}),
                  transition: {
                    ...(transition || {}),
                    delay: getStaggerOrder(index, letters.length),
                  },
                },
                exit: {
                  ...(exit as object || {}),
                  transition: {
                    ...(transition || {}),
                    delay: getStaggerOrder(index, letters.length),
                  },
                },
              }}
            >
              {letter === ' ' ? <span>&nbsp;</span> : letter}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText; 