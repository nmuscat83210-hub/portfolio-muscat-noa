import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Building2, Calendar, MapPin, X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { useTranslation } from '../lib/i18n';
import { easeLuxury } from '../lib/animations';

const experiences = [
  {
    id: 'europe-qualite',
    company: { fr: "Europe Qualité", en: "Europe Qualité" },
    location: { fr: "La Valette", en: "La Valette" },
    period: "2023-2024",
    year: { fr: "1ère année BUT GEII", en: "1st year BUT GEII" },
    role: { fr: "Technicien en Métrologie", en: "Metrology Technician" },
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a7c34a791a122b93f4ce7/d49da19f1_image.png",
    gallery_images: [
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/dea5e1409_photo1metrologie.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/e51b0e099_photo2metrologie.png"
    ],
    missions: {
      fr: [
        "Étalonnage électronique : vérification, calibrage et ajustement de multimètres, oscilloscopes, boîtes de résistances modulables et mégohmmètres",
        "Étalonnage mécanique : calibrage et contrôle de pinces à sertir (colonne de force), baromètres et balances ultra-précises",
        "Rédaction de certificats d'étalonnage et maintien de la traçabilité des appareils",
        "Déplacements sur les sites clients pour les interventions sur place",
        "Gestion des flux logistiques d'expédition et retour d'équipements"
      ],
      en: [
        "Electronic calibration: verification, adjustment, and calibration of multimeters, oscilloscopes, modular resistance boxes, and megohmmeters",
        "Mechanical calibration: calibration and control of crimping pliers (force column), barometers, and ultra-precise balances",
        "Writing calibration certificates and maintaining equipment traceability",
        "Travel to client sites for on-site interventions",
        "Management of equipment shipping and return logistics flows"
      ]
    },
    competences: {
      fr: ["Métrologie électronique", "Métrologie mécanique", "Étalons de référence", "Certificats d'étalonnage", "Traçabilité", "Excel"],
      en: ["Electronic metrology", "Mechanical metrology", "Reference standards", "Calibration certificates", "Traceability", "Excel"]
    },
    softSkills: {
      fr: ["Rigueur", "Précision", "Méthode", "Autonomie", "Fiabilité"],
      en: ["Rigor", "Precision", "Method", "Autonomy", "Reliability"]
    },
    projetsLies: [],
    avis: {
      fr: "Une expérience fondatrice dans la compréhension des exigences de qualité industrielle. La manipulation quotidienne d'étalons de référence et la rédaction de certificats ont développé une véritable culture de la précision et de la traçabilité métrologique.",
      en: "A foundational experience in understanding industrial quality requirements. Daily handling of reference standards and writing certificates developed a genuine culture of precision and metrological traceability."
    },
    conclusion: {
      fr: "J'ai choisi de quitter cette entreprise car les missions proposées étaient trop limitées et ne correspondaient plus à mes objectifs techniques pour la suite de mon parcours.",
      en: "I chose to leave this company because the missions offered were too limited and no longer matched my technical objectives for the continuation of my journey."
    }
  },
  {
    id: 'kontron',
    company: { fr: "Kontron Modular", en: "Kontron Modular" },
    location: { fr: "La Farlède", en: "La Farlède" },
    period: "2024-2026",
    year: { fr: "2ème et 3ème année BUT GEII", en: "2nd and 3rd year BUT GEII" },
    role: { fr: "Apprenti Technicien de Réparation — MCO Calculateurs Embarqués", en: "Repair Technician Apprentice — Embedded Computer MCO" },
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a7c34a791a122b93f4ce7/2adeb37bb_csm_Kontron_SPS_23_1_Presse__kl_7fbbfadc20.jpg",
    gallery_images: [
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/72e3b80d5_photoreparation1.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/f89774789_photoreparation2.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/d98ced7b6_photoreparation3.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/df9577d2c_photoreparation4.png"
    ],
    missions: {
      fr: [
        "Diagnostics électroniques par tests croisés sur calculateurs critiques (défense, aéronautique, ferroviaire) : vérification des étages d'alimentation (+12V, +5V, +3.3V), contrôle des mémoires CMOS (> 3V) et extraction de données S.M.A.R.T via HDD Expert et HD Tune",
        "Systèmes ferroviaires MOON (Interlocking) : navigation en environnement bas niveau EFI Shell, commandes kdiag, analyse de journaux PBIT, diagnostic Linux des modules FDM (badblocks), exportation VPD au format CSV pour bases de données SyID client",
        "Réseaux et validation (systèmes TRACe) : modification de mémoires VPD sous Linux via Minicom, déploiement de scripts Python de stress-test réseau (paquets 1448 octets, 60 secondes) pour certifier l'absence de pertes de flux",
        "Mécanique de précision et procédés spéciaux : démontage d'équipements militaires/ferroviaires compacts, résine époxy, Loctite 222/243/273, couples de serrage dynamométriques",
        "Validation finale : configuration BIOS par microswitches, tests de continuité des masses au micro-ohmmètre (< 100 mΩ), campagnes Burn-in avec PC Check avant expédition"
      ],
      en: [
        "Electronic diagnostics by cross-testing on critical computers (defense, aerospace, rail): verification of power stages (+12V, +5V, +3.3V), CMOS memory control (> 3V), and S.M.A.R.T data extraction via HDD Expert and HD Tune",
        "MOON rail systems (Interlocking): navigation in low-level EFI Shell environment, kdiag commands, PBIT log analysis, Linux diagnostics of FDM modules (badblocks), VPD export in CSV format for client SyID databases",
        "Networks and validation (TRACe systems): VPD memory modification under Linux via Minicom, deployment of Python network stress-test scripts (1448-byte packets, 60 seconds) to certify zero flow loss",
        "Precision mechanics and special processes: disassembly of compact military/rail equipment, epoxy resin, Loctite 222/243/273, torque-controlled tightening",
        "Final validation: BIOS configuration via microswitches, ground continuity testing with micro-ohmmeter (< 100 mΩ), Burn-in campaigns with PC Check before shipping"
      ]
    },
    competences: {
      fr: ["Diagnostic électronique", "Informatique industrielle", "Scripts Python", "Linux / EFI Shell", "Métrologie", "Réseaux industriels", "Procédés spéciaux", "BIOS / Firmware"],
      en: ["Electronic diagnostics", "Industrial computing", "Python scripts", "Linux / EFI Shell", "Metrology", "Industrial networks", "Special processes", "BIOS / Firmware"]
    },
    softSkills: {
      fr: ["Esprit d'analyse", "Rigueur méthodologique", "Autonomie", "Résolution de problèmes", "Synthèse technique"],
      en: ["Analytical mind", "Methodological rigor", "Autonomy", "Problem solving", "Technical synthesis"]
    },
    projetsLies: {
      fr: ["Documentation Technique par Rétro-ingénierie", "CDM600 + Réseau Cisco + STM32"],
      en: ["Technical Documentation by Reverse Engineering", "CDM600 + Cisco Network + STM32"]
    },
    avis: {
      fr: "Cette immersion dans un secteur régi par des normes strictes (ISO 9001, EN9100, ISO/TS 22163) est extrêmement formatrice. Isoler la racine des pannes par des tests croisés plutôt que de remplacer des pièces au hasard développe un fort esprit d'analyse confirmant mon ambition vers l'ingénierie.",
      en: "This immersion in a sector governed by strict standards (ISO 9001, EN9100, ISO/TS 22163) is extremely formative. Isolating the root cause of failures through cross-testing rather than randomly replacing parts develops a strong analytical mind, confirming my ambition toward engineering."
    },
    retex: {
      fr: "J'ai pu travailler sur une très grande variété de machines et d'architectures. Le travail sur les calculateurs MOON m'a particulièrement montré le lien fondamental entre hardware physique et logiciels/scripts.",
      en: "I was able to work on a very wide variety of machines and architectures. Working on MOON computers particularly showed me the fundamental link between physical hardware and software/scripts."
    },
  },
  {
    id: 'stage-droit-canonique',
    company: { fr: "Stage en Droit Canonique", en: "Canon Law Internship" },
    location: { fr: "Nice", en: "Nice" },
    period: "2025",
    year: { fr: "DU de Droit Canonique", en: "University Diploma in Canon Law" },
    role: { fr: "Stagiaire", en: "Intern" },
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a7c34a791a122b93f4ce7/692fa0502_image.png",
    missions: {
      fr: ["Analyse de dossiers canoniques", "Recherche documentaire juridique", "Participation aux consultations", "Rédaction de notes juridiques"],
      en: ["Analysis of canonical files", "Legal documentary research", "Participation in consultations", "Writing legal notes"]
    },
    competences: {
      fr: ["Droit canonique", "Analyse juridique", "Recherche documentaire", "Rédaction juridique"],
      en: ["Canon law", "Legal analysis", "Documentary research", "Legal writing"]
    },
    softSkills: {
      fr: ["Rigueur intellectuelle", "Esprit d'analyse", "Discrétion", "Organisation"],
      en: ["Intellectual rigor", "Analytical mind", "Discretion", "Organization"]
    },
    projetsLies: [],
    duration: { fr: "24 heures", en: "24 hours" }
  }
];

function resolveExp(exp, lang) {
  const resolved = { ...exp };
  for (const key of ['company', 'location', 'year', 'role', 'missions', 'competences', 'softSkills', 'projetsLies', 'avis', 'retex', 'conclusion', 'duration']) {
    if (exp[key] && typeof exp[key] === 'object' && exp[key][lang]) {
      resolved[key] = exp[key][lang];
    }
  }
  return resolved;
}

function GalleryModal({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.5, ease: easeLuxury }}
        onClick={e => e.stopPropagation()}
        className="relative max-w-4xl w-full"
      >
        <img src={images[current]} alt={`Photo ${current + 1}`} className="w-full max-h-[80vh] object-contain" />
        <button onClick={onClose} className="absolute top-4 right-4 text-white bg-black/50 p-2"><X size={20} /></button>
        {images.length > 1 && (
          <>
            <button onClick={() => setCurrent(c => (c - 1 + images.length) % images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2"><ChevronLeft size={24} /></button>
            <button onClick={() => setCurrent(c => (c + 1) % images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2"><ChevronRight size={24} /></button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">{current + 1} / {images.length}</div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ExperiencePro() {
  const { t, lang } = useTranslation();
  const [selectedExp, setSelectedExp] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const experiencesData = experiences.map(e => resolveExp(e, lang));

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <SectionTitle title={t.experience.title} subtitle={t.experience.subtitle} align="center" />
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1.4, ease: easeLuxury }}
          className="text-center text-base lg:text-lg text-black/60 font-light max-w-2xl mx-auto"
        >
          {t.experience.intro}
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {experiencesData.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1.4, delay: index * 0.12, ease: easeLuxury }} 
              onClick={() => setSelectedExp(exp)} 
              className="group cursor-pointer"
            >
              <div className="border border-gray-200 hover:border-[#CBAF73] transition-all duration-500 overflow-hidden">
                <div className="relative h-40 lg:h-48 overflow-hidden bg-gray-100">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                    <Building2 size={20} className="text-white" />
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] mb-3 block">{exp.year}</span>
                  <h3 className="text-xl lg:text-2xl font-light mb-2 group-hover:text-[#CBAF73] transition-colors">{exp.company}</h3>
                  <p className="text-base lg:text-lg text-black/60 mb-6">{exp.role}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-black/50 mb-6">
                    <span className="flex items-center gap-2"><MapPin size={14} />{exp.location}</span>
                    <span className="flex items-center gap-2"><Calendar size={14} />{exp.period}</span>
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">{t.experience.seeDetail}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedExp && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.4 }}
            onClick={() => { setSelectedExp(null); setLightboxIndex(null); }} 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-6 overflow-y-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 50 }} 
              transition={{ duration: 0.6, ease: easeLuxury }}
              onClick={e => e.stopPropagation()} 
              className="bg-white max-w-5xl w-full my-8"
            >
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/80" />
                <button onClick={() => setSelectedExp(null)} className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"><X size={20} className="text-white" /></button>
                <div className="absolute bottom-6 left-8">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] mb-2 block">{selectedExp.year}</span>
                  <h2 className="text-2xl lg:text-3xl font-light text-white mb-2">{selectedExp.company}</h2>
                  <p className="text-white/70">{selectedExp.role}</p>
                </div>
              </div>

              <div className="p-6 lg:p-12">
                <div className="flex flex-wrap gap-4 lg:gap-6 mb-8 lg:mb-12 pb-8 lg:pb-12 border-b border-gray-100">
                  <div className="flex items-center gap-3"><MapPin size={18} className="text-[#CBAF73]" /><span className="text-black/70">{selectedExp.location}</span></div>
                  <div className="flex items-center gap-3"><Calendar size={18} className="text-[#CBAF73]" /><span className="text-black/70">{selectedExp.period}</span></div>
                </div>

                {selectedExp.gallery_images && selectedExp.gallery_images.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">{t.experience.photos}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {selectedExp.gallery_images.map((img, i) => (
                        <div key={i} className="cursor-pointer overflow-hidden aspect-square bg-gray-100 group" onClick={() => setLightboxIndex(i)}>
                          <img src={img} alt={`Photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-12">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">{t.experience.missions}</h3>
                  <ul className="space-y-3">
                    {selectedExp.missions.map((mission, i) => (
                      <li key={i} className="flex items-start gap-3 text-black/70">
                        <CheckCircle2 size={18} className="text-[#CBAF73] mt-0.5 flex-shrink-0" />
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">{t.experience.techSkills}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.competences.map((comp, i) => (
                        <span key={i} className="px-3 py-2 bg-gray-100 text-black/70 text-sm">{comp}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">{t.experience.softSkills}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.softSkills.map((skill, i) => (
                        <span key={i} className="px-3 py-2 border border-[#CBAF73] text-[#CBAF73] text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedExp.avis && (
                  <div className="mb-8 p-6 bg-gray-50 border-l-2 border-[#CBAF73]">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">{t.experience.opinion}</h3>
                    <p className="text-sm text-black/70 leading-relaxed italic">{selectedExp.avis}</p>
                  </div>
                )}

                {selectedExp.retex && (
                  <div className="mb-8 p-6 bg-gray-50 border-l-2 border-gray-300">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">{t.experience.feedback}</h3>
                    <p className="text-sm text-black/70 leading-relaxed">{selectedExp.retex}</p>
                  </div>
                )}

                {selectedExp.duration && (
                  <div className="mb-8">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-2">{t.experience.duration}</h3>
                    <p className="text-black/70">{selectedExp.duration}</p>
                  </div>
                )}

                {selectedExp.projetsLies && selectedExp.projetsLies.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">{t.experience.linkedProjects}</h3>
                    <div className="space-y-2">
                      {selectedExp.projetsLies.map((projet, i) => (
                        <div key={i} className="flex items-center gap-2 text-black/70">
                          <div className="w-1 h-1 rounded-full bg-[#CBAF73]" />
                          <span>{projet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedExp.conclusion && (
                  <div className="mb-8 p-6 bg-gray-50 border-l-2 border-gray-200">
                    <p className="text-sm text-black/60 leading-relaxed italic">{selectedExp.conclusion}</p>
                  </div>
                )}

                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
                  <Link to={createPageUrl('Parcours')}>
                    <button className="px-6 py-3 border border-gray-200 hover:border-[#CBAF73] text-sm uppercase tracking-[0.2em] transition-colors">{t.experience.seeParcours}</button>
                  </Link>
                  <Link to={createPageUrl('Competences')}>
                    <button className="px-6 py-3 border border-gray-200 hover:border-[#CBAF73] text-sm uppercase tracking-[0.2em] transition-colors">{t.experience.seeCompetences}</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedExp && lightboxIndex !== null && (
          <GalleryModal images={selectedExp.gallery_images} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}