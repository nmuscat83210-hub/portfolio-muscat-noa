import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import TimelineItem from '../components/timeline/TimelineItem';
import { createPageUrl } from '../utils';
import Testimonials from '../components/testimonials/Testimonials';
import { useTranslation } from '../lib/i18n';
import { easeLuxury } from '../lib/animations';

export default function Parcours() {
  const { t } = useTranslation();
  const timeline = t.parcours.timeline;

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <SectionTitle 
          title={t.parcours.title}
          subtitle={t.parcours.subtitle}
          align="center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: easeLuxury }}
          className="text-center text-base lg:text-lg text-black/60 font-light max-w-2xl mx-auto"
        >
          {t.parcours.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: easeLuxury }}
          className="text-center mt-8"
        >
          <Link
            to={createPageUrl('Futur') + '#roadmap-section'}
            className="text-xs uppercase tracking-[0.3em] text-black/50 hover:text-[#CBAF73] transition-colors"
          >
            {t.parcours.roadmapLink}
          </Link>
        </motion.div>
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

      {/* Testimonials */}
      <Testimonials />

        </div>
        );
        }