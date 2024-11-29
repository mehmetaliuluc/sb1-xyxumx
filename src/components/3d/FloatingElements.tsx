import React from 'react';
import { motion } from 'framer-motion';

const shapes = [
  { type: 'circle', size: 40, color: 'emerald' },
  { type: 'square', size: 30, color: 'blue' },
  { type: 'triangle', size: 35, color: 'purple' }
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.color}-gradient opacity-30 blur-lg`}
          style={{
            width: shape.size,
            height: shape.size,
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '15%' : '0%',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}