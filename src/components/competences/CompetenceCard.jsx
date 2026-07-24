import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Wrench, Settings, MessageSquare, Users, 
  Shield, BookOpen, Brain, Lightbulb, Target
} from 'lucide-react';
import { useTranslation } from '../../lib/i18n';
import { easeLuxury } from '../../lib/animations';

const iconMap = {
  Cpu, Wrench, Settings, MessageSquare, Users, 
  Shield, BookOpen, Brain, Lightbulb, Target
};

export default function CompetenceCard({ competence, index, onClick }) {
  const { t } = useTranslation();
  const Icon = iconMap[competence.icon] || Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: index * 0.08, ease: easeLuxury }}
      onClick={() => onClick && onClick(competence)}
      className="group p-6 md:p-8 border border-gray-200 hover:border-[#CBAF73] transition-all duration-500 bg-white cursor-pointer"
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center mb-6 border border-gray-200 group-hover:border-[#CBAF73] group-hover:bg-[#CBAF73]/5 transition-all duration-300">
        <Icon size={24} className="text-black/60 group-hover:text-[#CBAF73] transition-colors" />
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-medium mb-3 group-hover:text-[#CBAF73] transition-colors">
        {competence.name}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-black/50 font-light leading-relaxed mb-6">
        {competence.description}
      </p>
      
      {/* Progress bar */}
      <div className="relative">
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${competence.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: easeLuxury }}
            className="h-full bg-gradient-to-r from-[#CBAF73] to-[#b89d5f]"
          />
        </div>
        <span className="absolute -top-6 right-0 text-xs text-black/40">
          {competence.level}%
        </span>
      </div>

      {/* Click indicator */}
      <div className="mt-4 text-xs uppercase tracking-[0.2em] text-[#CBAF73] opacity-0 group-hover:opacity-100 transition-opacity">
        {t.competences.seeDetail}
      </div>
    </motion.div>
  );
}