import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { useTranslation } from '../../lib/i18n';
import { easeLuxury } from '../../lib/animations';

export default function TimelineItem({ item, index, isLast }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, delay: index * 0.12, ease: easeLuxury }}
      className="relative"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-[#CBAF73] to-gray-200" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-white border-2 border-[#CBAF73] z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#CBAF73]" />
      </div>

      {/* Content card */}
      <div className="ml-16 mb-12">
        <motion.div
          className="group cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#CBAF73] font-medium mb-3">
            {item.period}
          </span>
          
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-light tracking-tight mb-2 group-hover:text-[#CBAF73] transition-colors">
                {item.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-black/50">
                {item.institution && (
                  <span className="flex items-center gap-1.5">
                    <GraduationCap size={14} />
                    {item.institution}
                  </span>
                )}
                {item.company && (
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={14} />
                    {item.company}
                  </span>
                )}
                {item.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                )}
              </div>
            </div>
            
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.4, ease: easeLuxury }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronDown size={20} className="text-black/40" />
            </motion.div>
          </div>
          
          <p className="mt-4 text-black/60 font-light leading-relaxed">
            {item.description}
          </p>
        </motion.div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: easeLuxury }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-gray-100">
                {item.competences && (
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
                      {t.timelineItem.skillsDeveloped}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.competences.map((comp, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs bg-gray-100 text-black/70 rounded-full"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {item.projects && (
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
                      {t.timelineItem.linkedProjects}
                    </h4>
                    <ul className="space-y-2">
                      {item.projects.map((project, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-black/70">
                          <div className="w-1 h-1 rounded-full bg-[#CBAF73]" />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}