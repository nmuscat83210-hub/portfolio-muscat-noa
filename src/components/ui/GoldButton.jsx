import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function GoldButton({ 
  children, 
  onClick, 
  href,
  variant = 'primary',
  icon = true,
  className = ''
}) {
  const baseStyles = "group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300";
  
  const variants = {
    primary: "bg-[#CBAF73] text-black hover:bg-[#b89d5f]",
    secondary: "bg-transparent border border-black text-black hover:bg-black hover:text-white",
    ghost: "bg-transparent text-black hover:text-[#CBAF73]"
  };

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
        {icon && (
          <ArrowRight 
            size={16} 
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && (
        <ArrowRight 
          size={16} 
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </motion.button>
  );
}