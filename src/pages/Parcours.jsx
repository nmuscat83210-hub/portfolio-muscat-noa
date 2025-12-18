import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import TimelineItem from '../components/timeline/TimelineItem';

const timeline = [
  {
    period: "2025 - 2026",
    title: "BUT GEII — 3ème année",
    institution: "IUT de La Garde",
    company: "Kontron Modular (Alternance)",
    location: "La Garde / La Farlède",
    description: "Consolidation des acquis et montée en expertise. Projets SAE avancés en télécommunications, réseaux et systèmes critiques. Rédaction de documentation technique complexe en entreprise. Préparation aux concours d'écoles d'ingénieurs.",
    competences: ["Télécommunications avancées", "Réseaux Cisco", "Systèmes STM32", "Gestion de projet", "Documentation technique"],
    projects: ["ADS-B Majeur", "CDM600 + Réseau Cisco + STM32", "Documentation Technique par Rétro-ingénierie"]
  },
  {
    period: "2025 - 2026",
    title: "DU de Droit Canonique",
    institution: "Université de Strasbourg",
    location: "Formation à distance",
    description: "Diplôme Universitaire de Droit Canonique en parallèle de ma dernière année de BUT. Formation juridique spécialisée dans le droit de l'Église.",
    competences: ["Droit canonique", "Analyse juridique", "Logique de raisonnement", "Structuration de la pensée"],
    projects: ["Mémoire de droit canonique", "Stage en droit canonique"]
  },
  {
    period: "2024 - 2025",
    title: "BUT GEII — 2ème année",
    institution: "IUT de La Garde",
    company: "Kontron Modular (Alternance)",
    location: "La Garde / La Farlède",
    description: "Approfondissement des compétences techniques : systèmes embarqués, réseaux industriels, télécommunications et maintenance avancée. Projets SAE en automatisation et contrôle de systèmes. Application professionnelle chez Kontron Modular.",
    competences: ["Systèmes embarqués", "Réseaux industriels", "Diagnostic électronique", "Maintenance", "Automatismes avancés"],
    projects: ["Régulation Moteur + Shelly EM", "Robot détectant les obstacles par capteurs infrarouges"]
  },
  {
    period: "2023 - 2024",
    title: "BUT GEII — 1ère année",
    institution: "IUT de La Garde",
    company: "Europe Qualité (Alternance)",
    location: "La Garde / La Valette",
    description: "Première année de BUT Génie Électrique et Informatique Industrielle en alternance. Découverte des fondamentaux : électronique, automatisme, réseaux et systèmes embarqués. En parallèle, acquisition de compétences professionnelles en métrologie chez Europe Qualité.",
    competences: ["Électronique de base", "Mesures et instrumentation", "Automatismes", "Programmation", "Métrologie", "Organisation"],
    projects: ["Smartlight", "Tableurs Excel de Métrologie"]
  },
  {
    period: "2022 - 2023",
    title: "Baccalauréat Général",
    institution: "Lycée du Coudon",
    location: "La Garde",
    description: "Baccalauréat général — spécialités Mathématiques, Physique-Chimie, option Mathématiques Expertes. Début de mon orientation vers les sciences de l'ingénieur et la technologie.",
    competences: ["Mathématiques", "Physique", "Sciences de l'Ingénieur", "Analyse", "Résolution de problèmes"],
    projects: ["Serre Automatique MQTT", "Jeu Éducatif CO₂"]
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