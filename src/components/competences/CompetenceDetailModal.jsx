import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp } from 'lucide-react';

export default function CompetenceDetailModal({ competence, onClose }) {
  if (!competence) return null;

  const yearLabels = [
    `${competence.name} — niveau BUT1`,
    `${competence.name} — niveau BUT2`,
    `${competence.name} — niveau BUT3`
  ];
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white max-w-4xl w-full my-8"
        >
          {/* Header */}
          <div className="relative bg-black p-8 md:p-12">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
            
            <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] mb-3 block">
              Compétence détaillée
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
              {competence.name}
            </h2>
            <p className="text-white/70 font-light">
              {competence.description}
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Why I master this */}
            <div className="mb-12">
              <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                Pourquoi je maîtrise cette compétence
              </h3>
              <p className="text-black/70 leading-relaxed">
                {competence.why || "Cette compétence a été développée au cours de ma formation et de mes expériences professionnelles, me permettant d'acquérir une maîtrise solide et pratique."}
              </p>
            </div>

            {/* Self-assessment by year - Only for GEII competences */}
            {competence.levelsByYear && (
              <div className="mb-12">
                <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">
                  Autoévaluation par année
                </h3>
                <div className="space-y-6">
                  {yearLabels.map((year, index) => {
                    const levels = competence.levelsByYear;
                    const level = levels[index] || 0;
                    
                    return (
                      <div key={year}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-black/70">{year}</span>
                          <span className="text-sm text-[#CBAF73]">{level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-[#CBAF73] to-[#b89d5f]"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Source distinction with navigation */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* From courses */}
              <button 
                className="p-6 border border-gray-200 hover:border-[#CBAF73] transition-all text-left group"
                onClick={() => window.location.href = '#parcours'}
              >
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] mb-3">
                  Cours GEII
                </h4>
                <p className="text-sm text-black/60 mb-2">
                  {competence.fromCourses || "Programme national BUT GEII"}
                </p>
                <span className="text-xs text-[#CBAF73] opacity-0 group-hover:opacity-100 transition-opacity">
                  Voir les cours →
                </span>
              </button>

              {/* From projects */}
              <button 
                className="p-6 border border-gray-200 hover:border-[#CBAF73] transition-all text-left group"
                onClick={() => window.location.href = '#projets'}
              >
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] mb-3">
                  Projets
                </h4>
                <p className="text-sm text-black/60 mb-2">
                  {competence.fromProjects || "Mise en pratique lors des projets académiques"}
                </p>
                <span className="text-xs text-[#CBAF73] opacity-0 group-hover:opacity-100 transition-opacity">
                  Voir les projets →
                </span>
              </button>

              {/* From work */}
              <button 
                className="p-6 border border-gray-200 hover:border-[#CBAF73] transition-all text-left group"
                onClick={() => window.location.href = '#experience'}
              >
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] mb-3">
                  Entreprise
                </h4>
                <p className="text-sm text-black/60 mb-2">
                  {competence.fromWork || "Application en environnement professionnel"}
                </p>
                <span className="text-xs text-[#CBAF73] opacity-0 group-hover:opacity-100 transition-opacity">
                  Voir les expériences →
                </span>
              </button>
            </div>

            {/* Progress indicator */}
            <div className="flex items-center gap-3 p-6 bg-gradient-to-r from-[#CBAF73]/10 to-transparent border-l-2 border-[#CBAF73]">
              <TrendingUp size={20} className="text-[#CBAF73]" />
              <p className="text-sm text-black/70">
                En progression constante grâce à la pratique régulière et l'approfondissement théorique
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}