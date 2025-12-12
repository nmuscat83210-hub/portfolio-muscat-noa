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
    description: "Baccalauréat général — spécialités Mathématiques, Physique-Chimie, option Mathématiques Expertes. Début de mon orientation vers les sciences de l'ingénieur et la technologie.",
    competences: ["Mathématiques", "Physique", "Sciences de l'Ingénieur", "Analyse", "Résolution de problèmes"],
    projects: ["Projet de fin d'année en SI", "TPE scientifique"]
  },
  {
    period: "2022 - 2023",
    title: "BUT GEII — 1ère année",
    institution: "IUT de La Garde",
    company: "Europe Qualité — La Valette (Alternance)",
    location: "La Garde / La Valette",
    description: "Première année de BUT Génie Électrique et Informatique Industrielle en alternance. Technicien métrologue au sein d'Europe Qualité, spécialisé dans la métrologie et le contrôle qualité.",
    competences: ["Métrologie", "Rigueur", "Gestion de base de données", "Réalisation de devis", "Suivi d'outillages", "Électronique de base"],
    projects: ["Calibration d'instruments de mesure", "Mise en place de procédures qualité", "Gestion de parc d'outillages"]
  },
  {
    period: "2023 - 2024",
    title: "BUT GEII — 2ème année",
    institution: "IUT de La Garde",
    company: "Kontron Modular (Alternance)",
    location: "La Garde / Toulon",
    description: "Évolution vers un poste de technicien de réparation chez Kontron Modular. Approfondissement des compétences en électronique et maintenance de systèmes complexes.",
    competences: ["Réparation électronique", "Diagnostic de pannes", "Maintenance", "Lecture de schémas", "Soudure CMS"],
    projects: ["Réparation de cartes électroniques", "Amélioration des processus de test", "Documentation technique"]
  },
  {
    period: "2024 - 2025",
    title: "BUT GEII — 3ème année",
    institution: "IUT de La Garde",
    company: "Kontron Modular (Alternance)",
    location: "La Garde / Toulon",
    description: "Poursuite chez Kontron Modular avec une montée en compétences significative. Finalisation du BUT GEII avec de nombreux projets techniques.",
    competences: ["Électronique avancée", "Gestion de projet", "Systèmes embarqués", "Télécommunications", "Autonomie"],
    projects: ["Projets de réparation avancée", "CDM600 + Réseau Cisco + STM32", "Préparation concours école d'ingénieur"]
  },
  {
    period: "2025 - 2026",
    title: "DU de Droit Canonique",
    institution: "Université de Strasbourg",
    location: "Formation à distance",
    description: "Diplôme Universitaire de Droit Canonique en parallèle de ma dernière année de BUT. Formation juridique spécialisée dans le droit de l'Église.",
    competences: ["Droit canonique", "Analyse juridique", "Logique de raisonnement", "Structuration de la pensée"],
    projects: ["Mémoire de droit canonique", "Stage en droit canonique"]
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


    </div>
  );
}