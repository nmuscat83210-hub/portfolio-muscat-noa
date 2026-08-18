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
    <section className="max-w-4xl mx-auto px-6 lg:px-12 mt-24 lg:mt-32">
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

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-black/10 lg:-translate-x-1/2" />

        <div className="space-y-12 lg:space-y-0">
          {diplomas.map((item, index) => {
            const isLeft = index % 2 === 0;
            const inProgress = item.status === 'En cours' || item.status === 'In progress';

            return (
              <motion.div
                key={item.name + item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: easeLuxury }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index === 0 ? 'lg:pt-0' : 'lg:pt-12'
                } ${index === diplomas.length - 1 ? 'lg:pb-0' : 'lg:pb-12'}`}
              >
                {/* Dot */}
                <div className="absolute left-4 lg:left-1/2 top-2 lg:top-12 -translate-x-1/2 z-10">
                  <div className="w-3 h-3 rounded-full bg-[#CBAF73] ring-4 ring-white" />
                </div>

                {/* Card */}
                <div
                  className={`pl-12 lg:pl-0 ${
                    isLeft ? 'lg:pr-12 lg:text-right' : 'lg:col-start-2 lg:pl-12'
                  }`}
                >
                  <div className="group p-6 lg:p-8 border border-black/10 hover:border-[#CBAF73]/40 transition-colors duration-500 bg-white">
                    <div
                      className={`flex items-center gap-2 mb-3 ${
                        isLeft ? 'lg:justify-end' : ''
                      }`}
                    >
                      <Award size={16} className="text-[#CBAF73]" />
                      <span className="text-xs uppercase tracking-[0.25em] text-black/40 font-medium">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-lg lg:text-xl font-medium text-black mb-1.5 tracking-tight">
                      {item.name}
                    </h3>

                    <p className="text-sm text-black/55 font-light mb-4">
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
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}