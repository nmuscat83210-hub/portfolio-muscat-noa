import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, ExternalLink, Download, Loader2 } from 'lucide-react';
import GoldButton from '../components/ui/GoldButton';

export default function ProjectDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

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
    <div className="min-h-screen pt-24 pb-24">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
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
          className="max-w-7xl mx-auto px-6 lg:px-12 mb-16"
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-black/60 font-light leading-relaxed">
            {project.short_description}
          </p>
        </motion.div>

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
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
            className="mb-16"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
              Description détaillée
            </h3>
            <div className="prose prose-lg max-w-none font-light text-black/70 leading-relaxed">
              {project.long_description.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
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
              Galerie
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {project.gallery_images.map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
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
            className="mb-16 p-8 bg-gray-50 border border-gray-100"
          >
            <h3 className="text-lg font-medium mb-8">Retour d'expérience</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
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
              {project.documents.map((doc, i) => (
                <a
                  key={i}
                  href={doc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-gray-200 hover:border-[#CBAF73] transition-colors"
                >
                  <Download size={18} className="text-[#CBAF73]" />
                  <span className="text-sm">Document {i + 1}</span>
                  <ExternalLink size={14} className="ml-auto text-black/30" />
                </a>
              ))}
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
    </div>
  );
}