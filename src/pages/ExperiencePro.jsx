import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Building2, Calendar, MapPin, X, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

const experiences = [
  {
    id: 'europe-qualite',
    company: "Europe Qualité",
    location: "La Valette",
    period: "2023-2024",
    year: "1ère année BUT GEII",
    role: "Technicien en Métrologie",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a7c34a791a122b93f4ce7/d49da19f1_image.png",
    missions: [
      "Réalisation d'opérations de contrôle et d'étalonnage en métrologie électronique et mécanique",
      "Déplacements directs sur les sites industriels des clients pour effectuer les mesures sur place",
      "Traitement et analyse des relevés de mesures via des tableurs Excel",
      "Génération et édition des certificats d'étalonnage officiels attestant de la conformité du matériel",
      "Programmation et gestion des flux d'expédition et de retour des colis contenant les équipements de mesure",
      "Collaboration avec l'équipe commerciale pour la rédaction et le chiffrage des devis clients"
    ],
    competences: ["Métrologie mécanique & électronique", "Excel avancé", "Certificats d'étalonnage", "Suivi logistique", "Traçabilité", "Relation client technique"],
    softSkills: ["Polyvalence", "Rigueur absolue", "Adaptabilité", "Esprit d'équipe", "Précision"],
    projetsLies: ["Tableurs Excel de Métrologie"],
    conclusion: "Cette première immersion dans le monde industriel s'est révélée extrêmement formatrice en offrant une vision globale du cycle de vie d'une prestation de service. Elle a permis de comprendre l'interdépendance entre la rigueur technique requise en laboratoire, l'efficacité logistique et l'importance de la relation commerciale, forgeant ainsi une solide capacité d'adaptation."
  },
  {
    id: 'kontron',
    company: "Kontron Modular",
    location: "La Farlède",
    period: "2024-2026",
    year: "2ème et 3ème année BUT GEII",
    role: "Apprenti Ingénieur / Technicien Supérieur en Réparation & Ingénierie Documentaire",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a7c34a791a122b93f4ce7/2adeb37bb_csm_Kontron_SPS_23_1_Presse__kl_7fbbfadc20.jpg",
    missions: [
      "Diagnostic analytique et réparation matérielle de calculateurs industriels durcis (Défense, Aéronautique, Ferroviaire) par méthode des tests croisés",
      "Ingénierie documentaire par rétro-ingénierie : création d'une base documentaire de maintenance pour systèmes Legacy",
      "Validation fonctionnelle et logicielle : stress-tests thermiques (Burn-in), tests réseau et investigations bas niveau sur contrôleurs de stockage",
      "Gestion de la conformité industrielle : traitement du flux RMA dans le respect des normes ISO 9001, EN9100, ESD, FOD",
      "Communication inter-équipes et formation : transmission des savoir-faire aux nouveaux arrivants via des outils pédagogiques"
    ],
    competences: ["EFI Shell & Linux CLI", "Flashage de BIOS", "Diagnostic S.M.A.R.T (HDD Expert / HD Tune)", "Stress-tests PC Check", "Scripts Python réseaux", "Multimètre & testeurs de charge RTX", "Loctite / Serrage au couple / Résine époxy", "Excel VBA & Macros"],
    softSkills: ["Autonomie & Rigueur extrême", "Adaptabilité & Polyvalence", "Analyse & Synthèse", "Force de proposition", "Gestion du stress"],
    projetsLies: ["Ingénierie documentaire chez Kontron", "Remise en fonctionnement d'un rack VME"]
  },
  {
    id: 'stage-droit-canonique',
    company: "Stage en Droit Canonique",
    location: "Nice",
    period: "2025",
    year: "DU de Droit Canonique",
    role: "Stagiaire",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a7c34a791a122b93f4ce7/692fa0502_image.png",
    missions: [
      "Analyse de dossiers canoniques",
      "Recherche documentaire juridique",
      "Participation aux consultations",
      "Rédaction de notes juridiques"
    ],
    competences: ["Droit canonique", "Analyse juridique", "Recherche documentaire", "Rédaction juridique"],
    softSkills: ["Rigueur intellectuelle", "Esprit d'analyse", "Discrétion", "Organisation"],
    projetsLies: [],
    duration: "24 heures"
  }
];

export default function ExperiencePro() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <SectionTitle 
          title="Expérience Professionnelle"
          subtitle="Parcours en entreprise"
          align="center"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-black/60 font-light max-w-2xl mx-auto"
        >
          Trois années d'alternance et un stage dans des environnements techniques et juridiques exigeants, 
          développant expertise et professionnalisme.
        </motion.p>
      </section>

      {/* Experience Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedExp(exp)}
              className="group cursor-pointer"
            >
              <div className="border border-gray-200 hover:border-[#CBAF73] transition-all duration-500 overflow-hidden">
                {/* Header Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  
                  <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                    <Building2 size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] mb-3 block">
                    {exp.year}
                  </span>
                  
                  <h3 className="text-2xl font-light mb-2 group-hover:text-[#CBAF73] transition-colors">
                    {exp.company}
                  </h3>
                  
                  <p className="text-lg text-black/60 mb-6">{exp.role}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-black/50 mb-6">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Voir le détail →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal détaillé */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExp(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-5xl w-full my-8"
            >
              {/* Header */}
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/80" />
                
                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <X size={20} className="text-white" />
                </button>
                
                <div className="absolute bottom-6 left-8">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] mb-2 block">
                    {selectedExp.year}
                  </span>
                  <h2 className="text-3xl font-light text-white mb-2">
                    {selectedExp.company}
                  </h2>
                  <p className="text-white/70">{selectedExp.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Info */}
                <div className="flex flex-wrap gap-6 mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-[#CBAF73]" />
                    <span className="text-black/70">{selectedExp.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-[#CBAF73]" />
                    <span className="text-black/70">{selectedExp.period}</span>
                  </div>
                </div>

                {/* Missions */}
                <div className="mb-12">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">
                    Missions principales
                  </h3>
                  <ul className="space-y-3">
                    {selectedExp.missions.map((mission, i) => (
                      <li key={i} className="flex items-start gap-3 text-black/70">
                        <CheckCircle2 size={18} className="text-[#CBAF73] mt-0.5 flex-shrink-0" />
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  {/* Compétences */}
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                      Compétences techniques
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.competences.map((comp, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 bg-gray-100 text-black/70 text-sm"
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
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.softSkills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 border border-[#CBAF73] text-[#CBAF73] text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Duration (if present) */}
                {selectedExp.duration && (
                  <div className="mb-12">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                      Durée
                    </h3>
                    <p className="text-black/70">{selectedExp.duration}</p>
                  </div>
                )}

                {/* Projets liés */}
                {selectedExp.projetsLies && selectedExp.projetsLies.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                      Projets associés
                    </h3>
                    <div className="space-y-2">
                      {selectedExp.projetsLies.map((projet, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-black/70"
                        >
                          <div className="w-1 h-1 rounded-full bg-[#CBAF73]" />
                          <span>{projet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Conclusion (if present) */}
                {selectedExp.conclusion && (
                  <div className="mb-12 p-6 bg-gray-50 border-l-2 border-[#CBAF73]">
                    <p className="text-sm text-black/70 leading-relaxed italic">
                      {selectedExp.conclusion}
                    </p>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
                  <Link to={createPageUrl('Parcours')}>
                    <button className="px-6 py-3 border border-gray-200 hover:border-[#CBAF73] text-sm uppercase tracking-[0.2em] transition-colors">
                      Voir le parcours
                    </button>
                  </Link>
                  <Link to={createPageUrl('Competences')}>
                    <button className="px-6 py-3 border border-gray-200 hover:border-[#CBAF73] text-sm uppercase tracking-[0.2em] transition-colors">
                      Voir les compétences
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}