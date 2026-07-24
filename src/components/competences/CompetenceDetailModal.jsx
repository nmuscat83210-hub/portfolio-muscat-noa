import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, FileText, ExternalLink } from 'lucide-react';
import { createPageUrl } from '../../utils';
import { useTranslation } from '../../lib/i18n';
import { easeLuxury } from '../../lib/animations';

function DocLinks({ docs, label }) {
  if (!docs || docs.length === 0) return null;
  return (
    <div className="mt-4 mb-8">
      <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">{label}</h3>
      <div className="flex flex-wrap gap-3">
        {docs.map((doc, i) => {
          const url = typeof doc === 'string' ? doc : doc.url;
          const name = typeof doc === 'object' && doc.label
            ? doc.label
            : url.split('/').pop().split('_').slice(1).join(' ').replace(/\.[^.]+$/, '') || `Document ${i + 1}`;
          return (
            <a key={i} href={url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-[#CBAF73] text-sm text-black/70 hover:text-[#CBAF73] transition-all">
              <FileText size={14} />
              <span>{name}</span>
              <ExternalLink size={12} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function CompetenceDetailModal({ competence, onClose }) {
  const { t } = useTranslation();
  if (!competence) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
      >
        <div className="min-h-full flex items-start justify-center p-6 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.6, ease: easeLuxury }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-4xl w-full"
          >
          {/* Header */}
          <div className="relative bg-black p-8 md:p-12">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
            
            <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] mb-3 block">
              {t.competences.modal.label}
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
              {competence.name}
            </h2>
            <p className="text-white/70 font-light">
              {competence.description}
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Why I master this */}
            <div className="mb-12">
              <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                {t.competences.modal.whyTitle}
              </h3>
              <p className="text-black/70 leading-relaxed whitespace-pre-line">
                {competence.why || t.competences.modal.whyDefault}
              </p>
              {competence.toeicScore !== undefined && (
                <div className="mt-4 p-4 bg-gray-50 border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-black/40">{t.competences.modal.toeicScore}</span>
                    <p className="text-lg font-medium text-black/80 mt-1">{competence.toeicScore}/990 — C1</p>
                  </div>
                  {competence.toeicDoc && (
                    <a href={competence.toeicDoc} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 border border-[#CBAF73] text-[#CBAF73] text-sm hover:bg-[#CBAF73]/10 transition-colors">
                      <FileText size={14} />
                      {t.competences.modal.toeicCert}
                    </a>
                  )}
                </div>
              )}
              <DocLinks docs={competence.iaDocs} label={t.competences.modal.iaDocs} />
              <DocLinks docs={competence.cybersecDocs} label={t.competences.modal.cybersecDocs} />
              <DocLinks docs={competence.codeDocs} label={t.competences.modal.codeDocs} />
              <DocLinks docs={competence.metrologieDocs} label={t.competences.modal.metrologieDocs} />
              {competence.metrologieImages && competence.metrologieImages.length > 0 && (
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-3">
                    {competence.metrologieImages.map((img, i) => (
                      <img key={i} src={img} alt={`Metrology ${i+1}`} className="w-full h-auto border border-gray-200" />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Self-assessment by year */}
            {competence.levelsByYear && (
              <div className="mb-12">
                <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">
                  {t.competences.modal.selfAssessment}
                </h3>
                <div className="space-y-8">
                  {competence.levelsByYear.map((level, index) => {
                    const labels = competence.levelLabels;
                    const yearLabel = labels
                      ? `${competence.name} — ${labels[index]}`
                      : `${competence.name} — BUT${index + 1}`;
                    return (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-black/70">{yearLabel}</span>
                          <span className="text-sm text-[#CBAF73]">{level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: index * 0.15, ease: easeLuxury }}
                            className="h-full bg-gradient-to-r from-[#CBAF73] to-[#b89d5f]"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Source distinction with navigation */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <button 
                className="p-6 border border-gray-200 hover:border-[#CBAF73] transition-all text-left group"
                onClick={() => window.location.href = createPageUrl('Parcours')}
              >
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] mb-3">
                  {t.competences.modal.fromCourses}
                </h4>
                <p className="text-sm text-black/60 mb-2">
                  {competence.fromCourses || t.competences.modal.fromCoursesDefault}
                </p>
                <span className="text-xs text-[#CBAF73] opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.competences.modal.seeCourses}
                </span>
              </button>

              <button 
                className="p-6 border border-gray-200 hover:border-[#CBAF73] transition-all text-left group"
                onClick={() => {
                  if (competence.name === "Maintenir" || competence.name === "Maintain") {
                    window.location.href = createPageUrl('ProjectDetail') + '?id=693c1be4ec925c0d63401959';
                  } else {
                    window.location.href = createPageUrl('Projets');
                  }
                }}
              >
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] mb-3">
                  {t.competences.modal.fromProjects}
                </h4>
                <p className="text-sm text-black/60 mb-2">
                  {competence.fromProjects || t.competences.modal.fromProjectsDefault}
                </p>
                <span className="text-xs text-[#CBAF73] opacity-0 group-hover:opacity-100 transition-opacity">
                  {competence.name === "Maintenir" || competence.name === "Maintain" ? t.competences.modal.seeProject : t.competences.modal.seeProjects}
                </span>
              </button>

              <button 
                className="p-6 border border-gray-200 hover:border-[#CBAF73] transition-all text-left group"
                onClick={() => window.location.href = createPageUrl('ExperiencePro')}
              >
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] mb-3">
                  {t.competences.modal.fromWork}
                </h4>
                <p className="text-sm text-black/60 mb-2">
                  {competence.fromWork || t.competences.modal.fromWorkDefault}
                </p>
                <span className="text-xs text-[#CBAF73] opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.competences.modal.seeExperiences}
                </span>
              </button>
            </div>

            {/* Progress indicator */}
            <div className="flex items-center gap-3 p-6 bg-gradient-to-r from-[#CBAF73]/10 to-transparent border-l-2 border-[#CBAF73]">
              <TrendingUp size={20} className="text-[#CBAF73]" />
              <p className="text-sm text-black/70">
                {t.competences.modal.progressNote}
              </p>
            </div>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}