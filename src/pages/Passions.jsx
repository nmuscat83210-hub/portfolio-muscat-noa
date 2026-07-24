import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { X, Dumbbell, Users, Music, Palette, BookOpen, Mountain } from 'lucide-react';
import { useTranslation } from '../lib/i18n';
import { easeLuxury } from '../lib/animations';

const iconMap = { Dumbbell, Users, Music, Palette, BookOpen, Mountain };

const passionImages = {
  musculation: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
  football: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
  piano: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
  art: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
  litterature: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
  randonnee: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
};

export default function Passions() {
  const { t } = useTranslation();
  const [selectedPassion, setSelectedPassion] = useState(null);
  const passionsData = t.passions.data.map(p => ({ ...p, icon: iconMap[p.id], image: passionImages[p.id] }));

  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <SectionTitle 
          title={t.passions.title}
          subtitle={t.passions.subtitle}
          align="center"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: easeLuxury }}
          className="text-center text-lg text-black/60 font-light max-w-2xl mx-auto"
        >
          {t.passions.intro}
        </motion.p>
      </section>

      {/* Grid of Passions */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {passionsData.map((passion, index) => {
            const Icon = passion.icon;
            return (
              <motion.div
                key={passion.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: index * 0.12, ease: easeLuxury }}
                onClick={() => setSelectedPassion(passion)}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] overflow-hidden border border-gray-200 hover:border-[#CBAF73] transition-all duration-500">
                  <img
                    src={passion.image}
                    alt={passion.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] font-medium mb-3 block">
                      {passion.category}
                    </span>
                    <h3 className="text-2xl font-light text-white mb-2 tracking-tight">
                      {passion.title}
                    </h3>
                    <p className="text-white/70 text-sm font-light">
                      {passion.shortDesc}
                    </p>
                    <div className="mt-4 text-xs uppercase tracking-[0.2em] text-[#CBAF73] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {t.passions.learnMore}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Modal détaillé */}
      <AnimatePresence>
        {selectedPassion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedPassion(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.6, ease: easeLuxury }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedPassion.image}
                  alt={selectedPassion.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <button
                  onClick={() => setSelectedPassion(null)}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <X size={20} className="text-white" />
                </button>
                
                <div className="absolute bottom-6 left-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] mb-2 block">
                    {selectedPassion.category}
                  </span>
                  <h2 className="text-3xl font-light text-white">
                    {selectedPassion.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="mb-12">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                    {t.passions.description}
                  </h3>
                  <p className="text-lg text-black/70 font-light leading-relaxed">
                    {selectedPassion.description}
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                    {t.passions.skillsAcquired}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedPassion.competences.map((comp, i) => (
                      <span key={i} className="px-4 py-2 bg-gray-100 text-black/70 text-sm">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                    {t.passions.softSkills}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedPassion.softSkills.map((skill, i) => (
                      <span key={i} className="px-4 py-2 border border-[#CBAF73] text-[#CBAF73] text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}