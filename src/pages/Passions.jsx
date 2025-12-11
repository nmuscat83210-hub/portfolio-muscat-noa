import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { X, Dumbbell, Users, Music, Palette, BookOpen, Mountain } from 'lucide-react';

const passionsData = [
  {
    id: 'musculation',
    icon: Dumbbell,
    title: "Musculation",
    category: "Sport",
    shortDesc: "Discipline, rigueur et constance",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    description: "La musculation est bien plus qu'un entraînement physique : c'est une école de vie qui forge la discipline mentale. Chaque séance est une opportunité de repousser ses limites, de cultiver la constance et d'apprendre la patience. Ce sport m'a enseigné la valeur de la rigueur et l'importance de la progression continue.",
    competences: ["Gestion d'objectifs", "Planification", "Analyse de résultats"],
    softSkills: ["Discipline", "Rigueur", "Constance", "Persévérance", "Dépassement de soi"]
  },
  {
    id: 'football',
    icon: Users,
    title: "Football",
    category: "Sport",
    shortDesc: "Coordination, stratégie et esprit d'équipe",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
    description: "Le football incarne l'essence du travail d'équipe et de la stratégie collective. Sur le terrain, chaque mouvement compte, chaque décision impacte le collectif. Ce sport m'a appris l'importance de la coordination, de l'anticipation et de la communication sous pression.",
    competences: ["Travail en équipe", "Communication", "Prise de décision rapide"],
    softSkills: ["Coordination", "Stratégie", "Esprit d'équipe", "Leadership", "Résilience"]
  },
  {
    id: 'piano',
    icon: Music,
    title: "Piano Classique",
    category: "Musique",
    shortDesc: "Précision, patience et sens du détail",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
    description: "Chopin, Beethoven, Bach — le piano classique est une quête de perfection où chaque note doit être juste, chaque nuance maîtrisée. Cette pratique exigeante développe une patience infinie et un sens aigu du détail. Chaque morceau est un défi technique et émotionnel qui demande des milliers d'heures de travail minutieux.",
    competences: ["Lecture de partitions", "Coordination main-cerveau", "Mémorisation"],
    softSkills: ["Précision", "Patience", "Sens du détail", "Concentration", "Expression artistique"]
  },
  {
    id: 'art',
    icon: Palette,
    title: "Art & Histoire de l'Art",
    category: "Culture",
    shortDesc: "Vision, intuition et créativité",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    description: "De Michel-Ange à Claude Monet, d'Henri Matisse aux cathédrales gothiques — l'art est une fenêtre sur l'âme humaine. L'étude de l'histoire de l'art développe la vision globale, l'intuition esthétique et stimule la créativité. Comprendre les courants artistiques affine le regard et nourrit l'esprit d'innovation.",
    competences: ["Analyse visuelle", "Contextualisation historique", "Interprétation symbolique"],
    softSkills: ["Vision", "Intuition", "Créativité", "Sensibilité esthétique", "Ouverture d'esprit"]
  },
  {
    id: 'litterature',
    icon: BookOpen,
    title: "Littérature",
    category: "Culture",
    shortDesc: "Structuration de la pensée",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
    description: "Le Petit Prince, Scapin, Saint Thomas d'Aquin — la littérature structure la pensée et affine l'expression. Chaque œuvre est une invitation à penser autrement, à questionner le monde et à développer l'esprit critique. La lecture forme l'intelligence et enrichit la réflexion personnelle.",
    competences: ["Analyse textuelle", "Synthèse d'idées", "Argumentation"],
    softSkills: ["Structuration de la pensée", "Esprit critique", "Expression", "Réflexion", "Empathie"]
  },
  {
    id: 'randonnee',
    icon: Mountain,
    title: "Randonnée en Montagne",
    category: "Nature",
    shortDesc: "Autonomie, gestion de l'effort et observation",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
    description: "La randonnée en montagne est une école d'autonomie et de gestion de l'effort. Face aux éléments, on apprend à anticiper, à gérer ses ressources et à observer son environnement. Chaque sommet atteint est le fruit d'une préparation minutieuse et d'une détermination sans faille.",
    competences: ["Planification d'itinéraire", "Orientation", "Gestion des ressources"],
    softSkills: ["Autonomie", "Gestion de l'effort", "Observation", "Adaptabilité", "Détermination"]
  }
];

export default function Passions() {
  const [selectedPassion, setSelectedPassion] = useState(null);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <SectionTitle 
          title="Passions"
          subtitle="Ce qui m'anime"
          align="center"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-black/60 font-light max-w-2xl mx-auto"
        >
          Au-delà de l'ingénierie, je cultive des passions qui enrichissent 
          ma vision du monde et nourrissent ma créativité.
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      En savoir plus →
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
            onClick={() => setSelectedPassion(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
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
                {/* Description */}
                <div className="mb-12">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                    Description
                  </h3>
                  <p className="text-lg text-black/70 font-light leading-relaxed">
                    {selectedPassion.description}
                  </p>
                </div>

                {/* Compétences acquises */}
                <div className="mb-12">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                    Compétences acquises
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedPassion.competences.map((comp, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gray-100 text-black/70 text-sm"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedPassion.softSkills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 border border-[#CBAF73] text-[#CBAF73] text-sm"
                      >
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