import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Building2, Calendar, MapPin, X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
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
    gallery_images: [
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/dea5e1409_photo1metrologie.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/e51b0e099_photo2metrologie.png"
    ],
    missions: [
      "Étalonnage électronique : vérification, calibrage et ajustement de multimètres, oscilloscopes, boîtes de résistances modulables et mégohmmètres",
      "Étalonnage mécanique : calibrage et contrôle de pinces à sertir (colonne de force), baromètres et balances ultra-précises",
      "Rédaction de certificats d'étalonnage et maintien de la traçabilité des appareils",
      "Déplacements sur les sites clients pour les interventions sur place",
      "Gestion des flux logistiques d'expédition et retour d'équipements"
    ],
    competences: ["Métrologie électronique", "Métrologie mécanique", "Étalons de référence", "Certificats d'étalonnage", "Traçabilité", "Excel"],
    softSkills: ["Rigueur", "Précision", "Méthode", "Autonomie", "Fiabilité"],
    projetsLies: [],
    avis: "Une expérience fondatrice dans la compréhension des exigences de qualité industrielle. La manipulation quotidienne d'étalons de référence et la rédaction de certificats ont développé une véritable culture de la précision et de la traçabilité métrologique.",
    conclusion: "J'ai choisi de quitter cette entreprise car les missions proposées étaient trop limitées et ne correspondaient plus à mes objectifs techniques pour la suite de mon parcours."
  },
  {
    id: 'kontron',
    company: "Kontron Modular",
    location: "La Farlède",
    period: "2024-2026",
    year: "2ème et 3ème année BUT GEII",
    role: "Apprenti Technicien de Réparation — MCO Calculateurs Embarqués",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a7c34a791a122b93f4ce7/2adeb37bb_csm_Kontron_SPS_23_1_Presse__kl_7fbbfadc20.jpg",
    gallery_images: [
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/72e3b80d5_photoreparation1.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/f89774789_photoreparation2.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/d98ced7b6_photoreparation3.png",
      "https://media.base44.com/images/public/693a7c34a791a122b93f4ce7/df9577d2c_photoreparation4.png"
    ],
    missions: [
      "Diagnostics électroniques par tests croisés sur calculateurs critiques (défense, aéronautique, ferroviaire) : vérification des étages d'alimentation (+12V, +5V, +3.3V), contrôle des mémoires CMOS (> 3V) et extraction de données S.M.A.R.T via HDD Expert et HD Tune",
      "Systèmes ferroviaires MOON (Interlocking) : navigation en environnement bas niveau EFI Shell, commandes kdiag, analyse de journaux PBIT, diagnostic Linux des modules FDM (badblocks), exportation VPD au format CSV pour bases de données SyID client",
      "Réseaux et validation (systèmes TRACe) : modification de mémoires VPD sous Linux via Minicom, déploiement de scripts Python de stress-test réseau (paquets 1448 octets, 60 secondes) pour certifier l'absence de pertes de flux",
      "Mécanique de précision et procédés spéciaux : démontage d'équipements militaires/ferroviaires compacts, résine époxy, Loctite 222/243/273, couples de serrage dynamométriques",
      "Validation finale : configuration BIOS par microswitches, tests de continuité des masses au micro-ohmmètre (< 100 mΩ), campagnes Burn-in avec PC Check avant expédition"
    ],
    competences: ["Diagnostic électronique", "Informatique industrielle", "Scripts Python", "Linux / EFI Shell", "Métrologie", "Réseaux industriels", "Procédés spéciaux", "BIOS / Firmware"],
    softSkills: ["Esprit d'analyse", "Rigueur méthodologique", "Autonomie", "Résolution de problèmes", "Synthèse technique"],
    projetsLies: ["Documentation Technique par Rétro-ingénierie", "CDM600 + Réseau Cisco + STM32"],
    avis: "Cette immersion dans un secteur régi par des normes strictes (ISO 9001, EN9100, ISO/TS 22163) est extrêmement formatrice. Isoler la racine des pannes par des tests croisés plutôt que de remplacer des pièces au hasard développe un fort esprit d'analyse confirmant mon ambition vers l'ingénierie.",
    retex: "J'ai pu travailler sur une très grande variété de machines et d'architectures. Le travail sur les calculateurs MOON m'a particulièrement montré le lien fondamental entre hardware physique et logiciels/scripts.",
    axe_amelioration: null
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
  const [selectedExp, setSelectedExp] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <SectionTitle title="Expérience Professionnelle" subtitle="Parcours en entreprise" align="center" />
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-lg text-black/60 font-light max-w-2xl mx-auto">
          Trois années d'alternance et un stage dans des environnements techniques et juridiques exigeants, développant expertise et professionnalisme.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} onClick={() => setSelectedExp(exp)} className="group cursor-pointer">
              <div className="border border-gray-200 hover:border-[#CBAF73] transition-all duration-500 overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                    <Building2 size={20} className="text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] mb-3 block">{exp.year}</span>
                  <h3 className="text-2xl font-light mb-2 group-hover:text-[#CBAF73] transition-colors">{exp.company}</h3>
                  <p className="text-lg text-black/60 mb-6">{exp.role}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-black/50 mb-6">
                    <span className="flex items-center gap-2"><MapPin size={14} />{exp.location}</span>
                    <span className="flex items-center gap-2"><Calendar size={14} />{exp.period}</span>
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">Voir le détail →</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedExp && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { setSelectedExp(null); setLightboxIndex(null); }} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-6 overflow-y-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }} onClick={e => e.stopPropagation()} className="bg-white max-w-5xl w-full my-8">
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/80" />
                <button onClick={() => setSelectedExp(null)} className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"><X size={20} className="text-white" /></button>
                <div className="absolute bottom-6 left-8">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] mb-2 block">{selectedExp.year}</span>
                  <h2 className="text-3xl font-light text-white mb-2">{selectedExp.company}</h2>
                  <p className="text-white/70">{selectedExp.role}</p>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-6 mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-center gap-3"><MapPin size={18} className="text-[#CBAF73]" /><span className="text-black/70">{selectedExp.location}</span></div>
                  <div className="flex items-center gap-3"><Calendar size={18} className="text-[#CBAF73]" /><span className="text-black/70">{selectedExp.period}</span></div>
                </div>

                {selectedExp.gallery_images && selectedExp.gallery_images.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">Photos</h3>
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
                  <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">Missions principales</h3>
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
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">Compétences techniques</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.competences.map((comp, i) => (
                        <span key={i} className="px-3 py-2 bg-gray-100 text-black/70 text-sm">{comp}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.softSkills.map((skill, i) => (
                        <span key={i} className="px-3 py-2 border border-[#CBAF73] text-[#CBAF73] text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedExp.avis && (
                  <div className="mb-8 p-6 bg-gray-50 border-l-2 border-[#CBAF73]">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">Avis</h3>
                    <p className="text-sm text-black/70 leading-relaxed italic">{selectedExp.avis}</p>
                  </div>
                )}

                {selectedExp.retex && (
                  <div className="mb-8 p-6 bg-gray-50 border-l-2 border-gray-300">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">Retour d'expérience</h3>
                    <p className="text-sm text-black/70 leading-relaxed">{selectedExp.retex}</p>
                  </div>
                )}

                {selectedExp.axe_amelioration && (
                  <div className="mb-8 p-6 bg-gray-50 border-l-2 border-gray-300">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">Axe d'amélioration</h3>
                    <p className="text-sm text-black/70 leading-relaxed">{selectedExp.axe_amelioration}</p>
                  </div>
                )}

                {selectedExp.duration && (
                  <div className="mb-8">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-2">Durée</h3>
                    <p className="text-black/70">{selectedExp.duration}</p>
                  </div>
                )}

                {selectedExp.projetsLies && selectedExp.projetsLies.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">Projets associés</h3>
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
                    <button className="px-6 py-3 border border-gray-200 hover:border-[#CBAF73] text-sm uppercase tracking-[0.2em] transition-colors">Voir le parcours</button>
                  </Link>
                  <Link to={createPageUrl('Competences')}>
                    <button className="px-6 py-3 border border-gray-200 hover:border-[#CBAF73] text-sm uppercase tracking-[0.2em] transition-colors">Voir les compétences</button>
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