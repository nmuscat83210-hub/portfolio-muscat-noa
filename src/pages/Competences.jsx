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
    icon: "MessageSquare",
    why: "La communication technique fait partie intégrante de mon parcours. J'ai été amené à rédiger des documents techniques, à présenter des projets et à échanger avec des équipes pluridisciplinaires, ce qui m'a appris à adapter mon discours et à transmettre des informations complexes de manière claire et structurée."
  },
  {
    name: "Gérer un projet",
    description: "Planifier, organiser et suivre l'avancement de projets techniques.",
    level: 80,
    icon: "Target",
    why: "J'ai acquis cette compétence au cours de projets techniques menés en formation et en contexte professionnel. La planification, le suivi d'avancement et la coordination avec différents interlocuteurs m'ont permis de structurer efficacement mon travail et de respecter des objectifs précis, dans des délais contraints."
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
    icon: "Cpu",
    why: "La maintenance électronique constitue une part importante de mon expérience professionnelle. J'ai régulièrement réalisé des diagnostics de pannes sur des équipements et des cartes électroniques, effectué des interventions de maintenance corrective et préventive, ainsi que des opérations de soudure de composants CMS. Travailler sur des systèmes en conditions réelles m'a permis de développer une approche méthodique, orientée sécurité, fiabilité et continuité de fonctionnement des installations."
  },
  {
    name: "Métrologie",
    description: "Calibration d'instruments, gestion de base de données métrologique, suivi d'outillages.",
    level: 85,
    icon: "Settings",
    why: "Cette compétence a été développée principalement à travers mon expérience professionnelle, dans des environnements où la précision des mesures et la traçabilité sont essentielles. J'ai été amené à réaliser des opérations de calibration, à exploiter et mettre à jour des bases de données métrologiques, ainsi qu'à assurer le suivi d'outillages conformément aux procédures qualité en vigueur. Cette pratique m'a permis d'acquérir une rigueur méthodologique et une compréhension concrète des exigences liées à la fiabilité et à la conformité des mesures."
  },
  {
    name: "IA & Cybersécurité",
    description: "Projets personnels en intelligence artificielle et sensibilisation à la sécurité informatique.",
    level: 50,
    icon: "Brain",
    why: "Cette compétence s'est développée à travers des projets académiques et personnels, centrés sur les bases de l'intelligence artificielle et les enjeux de la cybersécurité. J'ai appris à concevoir des solutions en intégrant les notions de protection des données, de robustesse logicielle et de sécurité des systèmes, en lien avec les contraintes de l'informatique industrielle."
  },
  {
    name: "Autonomie & Organisation",
    description: "Gestion du temps, priorisation des tâches, capacité à travailler de manière indépendante.",
    level: 95,
    icon: "Target",
    why: "Mon parcours en formation et en alternance m'a conduit à développer une forte autonomie et une organisation rigoureuse. La gestion simultanée des cours, projets et missions professionnelles m'a appris à prioriser efficacement les tâches et à travailler de manière fiable dans un environnement structuré."
  },
  {
    name: "Travail d'équipe",
    description: "Collaboration efficace, communication interpersonnelle, esprit de cohésion.",
    level: 90,
    icon: "Users",
    why: "Les projets académiques et les expériences professionnelles m'ont permis de travailler régulièrement en équipe, en collaboration avec des profils techniques variés. J'ai développé un esprit de coopération, d'écoute et de cohésion, indispensable à la réussite de projets collectifs."
  },
  {
    name: "Anglais technique",
    description: "Compréhension, rédaction et échange sur des sujets techniques en anglais. Niveau C1.",
    level: 85,
    icon: "Globe",
    why: "L'anglais occupe une place importante dans mon parcours, notamment à travers l'utilisation régulière de documentations techniques, de normes, de ressources académiques et d'outils informatiques en langue anglaise. Je suis capable de comprendre, rédiger et échanger sur des sujets techniques avec aisance, aussi bien à l'écrit qu'à l'oral.",
    toeicScore: null
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
          <h3 className="text-2xl md:text-3xl font-light">Compétences Transversales</h3>
          <p className="text-sm text-black/50 mt-2">
            Compétences transversales et spécialisations personnelles développées en parallèle
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