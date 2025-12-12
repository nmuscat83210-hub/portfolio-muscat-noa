import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import CompetenceCard from '../components/competences/CompetenceCard';
import CompetenceDetailModal from '../components/competences/CompetenceDetailModal';

const competencesGEII = [
  {
    name: "Concevoir",
    description: "Concevoir des systèmes électroniques et informatiques industriels répondant aux besoins spécifiques.",
    level: 80,
    levelsByYear: [40, 65, 80],
    icon: "Lightbulb",
    why: "Développée au fil des projets GEII et en entreprise, cette compétence combine conception théorique et mise en pratique sur des systèmes réels.",
    fromCourses: "Électronique analogique, Systèmes numériques, Conception de circuits",
    fromProjects: "Robot suiveur de ligne, Smartlight, CDM600 + Cisco",
    fromWork: "Conception de solutions de test chez Kontron"
  },
  {
    name: "Vérifier",
    description: "Vérifier la conformité des systèmes, valider les performances et assurer la qualité.",
    level: 85,
    levelsByYear: [50, 75, 85],
    icon: "Shield",
    why: "Compétence centrale en métrologie et en tests électroniques, renforcée par l'expérience en contrôle qualité.",
    fromCourses: "Mesures et instrumentation, Qualité, Métrologie",
    fromProjects: "Validation systèmes ADS-B, Tests Shelly EM",
    fromWork: "Métrologie chez Europe Qualité, validation chez Kontron"
  },
  {
    name: "Maintenir",
    description: "Diagnostiquer, réparer et assurer la maintenance préventive des systèmes.",
    level: 90,
    levelsByYear: [30, 70, 90],
    icon: "Wrench",
    why: "Ma spécialité en entreprise : diagnostic et réparation de cartes électroniques complexes, maintenance avancée.",
    fromCourses: "Maintenance industrielle, Diagnostic de pannes",
    fromProjects: "Documentation de procédures de réparation",
    fromWork: "Réparation chez Kontron, maintenance préventive"
  },
  {
    name: "Installer",
    description: "Installer et mettre en service des équipements électriques et automatisés.",
    level: 75,
    levelsByYear: [45, 65, 75],
    icon: "Settings",
    why: "Acquise lors des projets pratiques et des mises en service de systèmes en entreprise.",
    fromCourses: "Automatismes, Réseaux industriels, Systèmes embarqués",
    fromProjects: "Installation serre MQTT, Mise en service CDM600",
    fromWork: "Installation et paramétrage d'équipements de test"
  }
];

const competencesHorsGEII = [
  {
    name: "Communiquer",
    description: "Rédiger des documents techniques, présenter des projets et interagir avec les équipes.",
    level: 85,
    icon: "MessageSquare"
  },
  {
    name: "Gérer un projet",
    description: "Planifier, organiser et suivre l'avancement de projets techniques.",
    level: 80,
    icon: "Target"
  },
  {
    name: "Droit Canonique",
    description: "Analyse juridique, logique de raisonnement, structuration de la pensée selon les principes du droit de l'Église.",
    level: 60,
    icon: "BookOpen"
  },
  {
    name: "Maintenance Électronique",
    description: "Réparation de cartes électroniques, diagnostic de pannes, soudure CMS et gestion de composants.",
    level: 90,
    icon: "Cpu"
  },
  {
    name: "Métrologie",
    description: "Calibration d'instruments, gestion de base de données métrologique, suivi d'outillages.",
    level: 85,
    icon: "Settings"
  },
  {
    name: "IA & Cybersécurité",
    description: "Projets personnels en intelligence artificielle et sensibilisation à la sécurité informatique.",
    level: 50,
    icon: "Brain"
  },
  {
    name: "Autonomie & Organisation",
    description: "Gestion du temps, priorisation des tâches, capacité à travailler de manière indépendante.",
    level: 95,
    icon: "Target"
  },
  {
    name: "Travail d'équipe",
    description: "Collaboration efficace, communication interpersonnelle, esprit de cohésion.",
    level: 90,
    icon: "Users"
  }
];

export default function Competences() {
  const [selectedCompetence, setSelectedCompetence] = useState(null);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <SectionTitle 
          title="Compétences"
          subtitle="Savoir-faire"
          align="center"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-black/60 font-light max-w-2xl mx-auto"
        >
          Un ensemble de compétences techniques et transversales 
          développées au fil de ma formation et de mes expériences professionnelles.
        </motion.p>
      </section>

      {/* Compétences GEII */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] font-medium mb-3 block">
            Référentiel National
          </span>
          <h3 className="text-2xl md:text-3xl font-light">Compétences GEII</h3>
          <p className="text-sm text-black/50 mt-2">
            Les 4 compétences du référentiel national BUT GEII
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencesGEII.map((comp, index) => (
            <CompetenceCard 
              key={comp.name} 
              competence={comp} 
              index={index}
              onClick={setSelectedCompetence}
            />
          ))}
        </div>
      </section>

      {/* Compétences Hors GEII */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] font-medium mb-3 block">
            Compétences Complémentaires
          </span>
          <h3 className="text-2xl md:text-3xl font-light">Hors Référentiel GEII</h3>
          <p className="text-sm text-black/50 mt-2">
            Compétences transversales et spécialisations personnelles
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencesHorsGEII.map((comp, index) => (
            <CompetenceCard 
              key={comp.name} 
              competence={comp} 
              index={index}
              onClick={setSelectedCompetence}
            />
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedCompetence && (
        <CompetenceDetailModal
          competence={selectedCompetence}
          onClose={() => setSelectedCompetence(null)}
        />
      )}
    </div>
  );
}