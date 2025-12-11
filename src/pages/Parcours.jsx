import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import TimelineItem from '../components/timeline/TimelineItem';

const timeline = [
  {
    period: "2021 - 2022",
    title: "Baccalauréat Général",
    institution: "Lycée du Coudon",
    location: "La Garde",
    description: "Spécialités Mathématiques, Physique-Chimie et Sciences de l'Ingénieur. Début de mon orientation vers les sciences de l'ingénieur et la technologie.",
    competences: ["Mathématiques", "Physique", "Sciences de l'Ingénieur", "Analyse", "Résolution de problèmes"],
    projects: ["Projet de fin d'année en SI", "TPE scientifique"]
  },
  {
    period: "2022 - 2023",
    title: "BUT GEII — 1ère année",
    institution: "IUT de Toulon",
    company: "Europe Qualité (Alternance)",
    location: "Toulon / La Seyne-sur-Mer",
    description: "Première année de BUT Génie Électrique et Informatique Industrielle en alternance. Technicien métrologue au sein d'Europe Qualité, spécialisé dans la métrologie et le contrôle qualité.",
    competences: ["Métrologie", "Rigueur", "Gestion de base de données", "Réalisation de devis", "Suivi d'outillages", "Électronique de base"],
    projects: ["Calibration d'instruments de mesure", "Mise en place de procédures qualité", "Gestion de parc d'outillages"]
  },
  {
    period: "2023 - 2024",
    title: "BUT GEII — 2ème année",
    institution: "IUT de Toulon",
    company: "Kontron Modular (Alternance)",
    location: "Toulon",
    description: "Évolution vers un poste de technicien de réparation chez Kontron Modular. Approfondissement des compétences en électronique et maintenance de systèmes complexes.",
    competences: ["Réparation électronique", "Diagnostic de pannes", "Maintenance", "Lecture de schémas", "Soudure CMS"],
    projects: ["Réparation de cartes électroniques", "Amélioration des processus de test", "Documentation technique"]
  },
  {
    period: "2024 - 2025",
    title: "BUT GEII — 3ème année",
    institution: "IUT de Toulon",
    company: "Kontron Modular (Alternance)",
    location: "Toulon",
    description: "Poursuite chez Kontron Modular avec une montée en compétences significative. En parallèle, début du Diplôme Universitaire de Droit Canonique à l'Université de Strasbourg (formation à distance).",
    competences: ["Électronique avancée", "Gestion de projet", "Droit canonique", "Analyse juridique", "Autonomie"],
    projects: ["Projets de réparation avancée", "Formation DU Droit Canonique", "Préparation concours école d'ingénieur"]
  }
];

export default function Parcours() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <SectionTitle 
          title="Parcours"
          subtitle="Mon évolution"
          align="center"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-black/60 font-light max-w-2xl mx-auto"
        >
          Du baccalauréat scientifique au BUT GEII en alternance, 
          découvrez les étapes clés de ma formation académique et professionnelle.
        </motion.p>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="relative">
          {timeline.map((item, index) => (
            <TimelineItem 
              key={item.period} 
              item={item} 
              index={index}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-32 py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "3", label: "Années de BUT" },
              { value: "2", label: "Entreprises" },
              { value: "1", label: "DU en cours" },
              { value: "∞", label: "Ambitions" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-5xl md:text-6xl font-light text-[#CBAF73]">
                  {stat.value}
                </span>
                <p className="mt-2 text-white/60 text-sm uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}