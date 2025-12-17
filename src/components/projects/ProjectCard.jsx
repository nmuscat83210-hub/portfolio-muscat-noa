import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <Link to={createPageUrl(`ProjectDetail?id=${project.id}`)}>
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          {project.cover_image ? (
            <img
              src={project.cover_image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-4xl font-light text-gray-300">
                {project.title?.charAt(0)}
              </span>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ArrowUpRight size={24} className="text-black" />
            </motion.div>
          </div>
        </div>
        
        {/* Content */}
        <div className="mt-6">
          {/* Category */}
          <span className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] font-medium">
            {project.category === 'geii' ? 'GEII' : 
             project.category === 'personnel' ? 'Personnel' : 
             project.category === 'terminale' ? 'Terminale S.I' : 'Entreprise'}
          </span>
          
          {/* Title */}
          <h3 className="text-xl font-light mt-2 mb-3 group-hover:text-[#CBAF73] transition-colors">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-black/50 font-light line-clamp-2">
            {project.short_description}
          </p>
          
          {/* Tags */}
          {project.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-gray-100 text-black/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}