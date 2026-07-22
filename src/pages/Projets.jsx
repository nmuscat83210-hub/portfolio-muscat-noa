import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/projects/ProjectCard';
import { Loader2 } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'terminale', name: 'Terminale S.I' },
  { id: 'geii', name: 'GEII' },
  { id: 'entreprise', name: 'Entreprise' },
  { id: 'personnel', name: 'Personnel' }
];

export default function Projets() {
  const [activeCategory, setActiveCategory] = useState('all');

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => base44.entities.Project.list('-created_date')
  });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-16">
        <SectionTitle 
          title="Projets"
          subtitle="Réalisations"
          align="center"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-base lg:text-lg text-black/60 font-light max-w-2xl mx-auto mb-12"
        >
          Découvrez mes réalisations académiques, professionnelles et personnelles, 
          témoins de mon parcours et de mes compétences.
        </motion.p>

        {/* Filter */}
        <div className="flex justify-center">
          <div className="flex gap-2 p-1 bg-gray-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 lg:px-6 lg:py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-black text-white'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        {isLoading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="w-8 h-8 animate-spin text-[#CBAF73]" />
          </div>
        ) : filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-xl text-black/40 font-light">
              Aucun projet dans cette catégorie pour le moment.
            </p>
            <p className="text-sm text-black/30 mt-2">
              Les projets seront ajoutés prochainement.
            </p>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      <section className="mt-20 lg:mt-32 py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] font-medium mb-4 block">
              Collaboration
            </span>
            <h3 className="text-xl md:text-3xl font-light mb-6">
              Un projet en tête ?
            </h3>
            <p className="text-black/50 font-light max-w-lg mx-auto">
              N'hésitez pas à me contacter pour discuter de vos idées 
              ou de potentielles collaborations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}