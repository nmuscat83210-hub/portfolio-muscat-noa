import React from 'react';
import { motion } from 'framer-motion';
import { easeLuxury } from '../../lib/animations';

export default function SectionTitle({ 
  title, 
  subtitle, 
  align = 'center',
  light = false 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, ease: easeLuxury }}
      className={`mb-16 md:mb-24 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      {subtitle && (
        <span 
          className={`text-xs uppercase tracking-[0.3em] font-medium mb-4 block ${
            light ? 'text-white/50' : 'text-black/40'
          }`}
          style={{ color: light ? 'rgba(255,255,255,0.5)' : '#CBAF73' }}
        >
          {subtitle}
        </span>
      )}
      <h2 
        className={`text-3xl md:text-5xl lg:text-6xl font-light tracking-tight ${
          light ? 'text-white' : 'text-black'
        }`}
      >
        {title}
      </h2>
    </motion.div>
  );
}