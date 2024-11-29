import React from 'react';
import { motion } from 'framer-motion';

interface ImageCardProps {
  url: string;
  title: string;
  description: string;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}

export default function ImageCard({ url, title, description, index, isHovered, onHover }: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.div 
        className="aspect-w-16 aspect-h-9"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={url}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}