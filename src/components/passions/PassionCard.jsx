import React from 'react';
import { motion } from 'framer-motion';

export default function PassionCard({ passion, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <motion.img
          src={passion.image}
          alt={passion.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] font-medium mb-3 block">
            {passion.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
            {passion.title}
          </h3>
          <p className="text-white/70 font-light leading-relaxed max-w-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            {passion.description}
          </p>
        </div>
      </div>
      
      {/* Hover accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#CBAF73] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}