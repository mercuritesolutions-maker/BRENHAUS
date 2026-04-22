import React from 'react';
import { motion } from 'motion/react';

interface PuzzleImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const PuzzleImage = ({ src, alt, className = "" }: PuzzleImageProps) => {
  // 2x2 Grid segments
  const segments = [
    { id: 0, x: -50, y: -50, rotate: -15, bgPos: "0% 0%" },
    { id: 1, x: 50, y: -30, rotate: 10, bgPos: "100% 0%" },
    { id: 2, x: -30, y: 50, rotate: 15, bgPos: "0% 100%" },
    { id: 3, x: 60, y: 60, rotate: -10, bgPos: "100% 100%" },
  ];

  return (
    <div className={`relative aspect-[4/5] ${className} group`}>
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-1">
        {segments.map((seg) => (
          <motion.div
            key={seg.id}
            initial={{ 
              x: seg.x, 
              y: seg.y, 
              rotate: seg.rotate, 
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{ 
              x: 0, 
              y: 0, 
              rotate: 0, 
              opacity: 1,
              scale: 1
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1.5, 
              delay: seg.id * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="relative overflow-hidden rounded-lg shadow-lg border border-white/5"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: '200% 200%',
              backgroundPosition: seg.bgPos,
            }}
          >
            {/* Subtle overlay that fades on connection */}
            <motion.div 
              initial={{ opacity: 0.4 }}
              whileInView={{ opacity: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute inset-0 bg-primary/40"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Glow effect on connection */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute inset-0 bg-accent/5 blur-3xl -z-10 rounded-full"
      />
    </div>
  );
};
