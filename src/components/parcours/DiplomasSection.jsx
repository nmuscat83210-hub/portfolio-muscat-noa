import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useTranslation } from '../../lib/i18n';
import { easeLuxury } from '../../lib/animations';
import { Award } from 'lucide-react';

export default function DiplomasSection() {
  const { t } = useTranslation();
  const p = t.parcours;
  const diplomas = p.diplomas;

  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-12 mt-24 lg:mt-32">
      <SectionTitle
        title={p.diplomasTitle}
        subtitle={p.diplomasSubtitle}
        align="center"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: easeLuxury }}
        className="text-center text-base lg:text-lg text-black/60 font-light max-w-2xl mx-auto mb-16 lg:mb-20"
      >
        {p.diplomasIntro}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
        {diplomas.map((item, index) => {
          const inProgress = item.status === 'En cours' || item.status === 'In progress';

          return (
            <motion.div
              key={item.name + item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: easeLuxury }}
              className="group relative bg-white p-8 lg:p-10 hover:bg-black/[0.02] transition-colors duration-500"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award size={15} className="text-[#CBAF73]" />
                <span className="text-xs uppercase tracking-[0.25em] text-black/40 font-medium">
                  {item.year}
                </span>
              </div>

              <h3 className="text-lg lg:text-xl font-medium text-black mb-1.5 tracking-tight">
                {item.name}
              </h3>

              <p className="text-sm text-black/55 font-light mb-5">
                {item.institution}
              </p>

              <span
                className={`inline-flex items-center text-[11px] uppercase tracking-[0.2em] font-medium px-3 py-1 ${
                  inProgress
                    ? 'text-[#CBAF73] border border-[#CBAF73]/30'
                    : 'text-black/40 border border-black/10'
                }`}
              >
                {item.status}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}