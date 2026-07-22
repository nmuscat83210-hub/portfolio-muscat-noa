import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, ExternalLink, Download, Loader2, X } from 'lucide-react';
import GoldButton from '../components/ui/GoldButton';
import ReactMarkdown from 'react-markdown';

export default function ProjectDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  const [lightboxImage, setLightboxImage] = useState(null);

  const { data: project, isLoading } = useQuery({
    queryKey: ['project', projectId],
    queryFn: async () => {
      const projects = await base44.entities.Project.filter({ id: projectId });
      return projects[0];
    },
    enabled: !!projectId
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#CBAF73]" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="text-2xl font-light mb-4">Projet non trouvé</h1>
        <Link to={createPageUrl('Projets')}>
          <GoldButton variant="secondary">Retour aux projets</GoldButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16 lg:pb-24">
      {/* Back button */}
      <div           className="max-w-7xl mx-auto px-6 lg:px-12 mb-8 lg:mb-12">
        <Link 
          to={createPageUrl('Projets')}
          className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>
      </div>

      {/* Hero Image */}
      {project.cover_image && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-16"
        >
          <div className="aspect-video overflow-hidden bg-gray-100">
            <img
              src={project.cover_image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] font-medium mb-4 block">
            {project.category === 'geii' ? 'Projet GEII' : 
             project.category === 'personnel' ? 'Projet Personnel' : 'Projet Entreprise'}
            {project.year && ` — ${project.year}`}
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-black/60 font-light leading-relaxed">
            {project.short_description}
          </p>
        </motion.div>

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 lg:mb-12"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
              Technologies utilisées
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm bg-gray-100 text-black/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Long Description */}
        {project.long_description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 lg:mb-16"
          >
            <div className="prose prose-lg max-w-none font-light text-black/70 leading-relaxed">
              <ReactMarkdown
                components={{
                  h1: ({children}) => <h2 className="text-2xl font-medium mt-12 mb-6 text-black">{children}</h2>,
                  h2: ({children}) => <h3 className="text-xl font-medium mt-8 mb-4 text-black">{children}</h3>,
                  strong: ({children}) => <strong className="text-lg font-medium block mt-8 mb-4 text-black">{children}</strong>,
                  p: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                  ul: ({children}) => <ul className="list-none space-y-2 mb-6">{children}</ul>,
                  li: ({children}) => <li className="pl-0 text-black/70">{children}</li>,
                  a: ({href, children}) => {
                    if (href?.includes('youtube.com') || href?.includes('youtu.be')) {
                      const videoId = href.includes('youtu.be')
                        ? href.split('youtu.be/')[1].split(/[?#]/)[0]
                        : new URLSearchParams(href.split('?')[1]).get('v');
                      return (
                        <div className="my-8">
                          <div className="relative" style={{paddingBottom: '56.25%', height: 0}}>
                            <iframe
                              src={`https://www.youtube.com/embed/${videoId}`}
                              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px', border: '1px solid #e5e7eb'}}
                              frameBorder="0"
                              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      );
                    }
                    return <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#CBAF73] hover:underline">{children}</a>;
                  }
                }}
              >
                {project.long_description}
              </ReactMarkdown>
            </div>
          </motion.div>
        )}

        {/* Gallery */}
        {project.gallery_images?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-6">
              Documentation visuelle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery_images.map((img, i) => (
                <div 
                  key={i} 
                  className="aspect-video overflow-hidden bg-gray-100 cursor-pointer group relative border border-gray-200 hover:border-[#CBAF73] transition-all"
                  onClick={() => setLightboxImage(img)}
                >
                  <img
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Cliquer pour agrandir
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* RETEX Section */}
        {(project.retex_points_forts || project.retex_ameliorations || project.retex_apprentissages) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 lg:mb-16 p-6 lg:p-8 bg-gray-50 border border-gray-100"
          >
            <h3 className="text-lg font-medium mb-8">Retour d'expérience</h3>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {project.retex_points_forts && (
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] mb-3">
                    Points forts
                  </h4>
                  <p className="text-sm text-black/60 font-light leading-relaxed">
                    {project.retex_points_forts}
                  </p>
                </div>
              )}
              
              {project.retex_ameliorations && (
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] mb-3">
                    Axes d'amélioration
                  </h4>
                  <p className="text-sm text-black/60 font-light leading-relaxed">
                    {project.retex_ameliorations}
                  </p>
                </div>
              )}
              
              {project.retex_apprentissages && (
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] mb-3">
                    Apprentissages
                  </h4>
                  <p className="text-sm text-black/60 font-light leading-relaxed">
                    {project.retex_apprentissages}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Documents */}
        {project.documents?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
              Documents
            </h3>
            <div className="space-y-2">
              {project.documents.map((doc, i) => {
                const url = typeof doc === 'string' ? doc : doc.url;
                const label = typeof doc === 'object' && doc.label
                  ? doc.label
                  : url.split('/').pop().split('_').slice(1).join(' ').replace(/\.[^.]+$/, '') || `Document ${i + 1}`;
                return (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 border border-gray-200 hover:border-[#CBAF73] transition-colors"
                  >
                    <Download size={18} className="text-[#CBAF73]" />
                    <span className="text-sm">{label}</span>
                    <ExternalLink size={14} className="ml-auto text-black/30" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Competences */}
        {project.competences?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
              Compétences mobilisées
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.competences.map((comp, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm border border-[#CBAF73] text-[#CBAF73]"
                >
                  {comp}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt="Image agrandie"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}