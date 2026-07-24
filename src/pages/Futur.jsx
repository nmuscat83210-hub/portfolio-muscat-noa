import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { GraduationCap, Anchor, Shield, Cpu, ArrowRight } from 'lucide-react';
import { useTranslation } from '../lib/i18n';
import { easeLuxury } from '../lib/animations';

const aspirationImages = [
  "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a7c34a791a122b93f4ce7/7d2ccc3b8_marine_1.jpg",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
];
const aspirationIcons = [GraduationCap, Anchor, Cpu, Shield];

export default function Futur() {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const aspirations = t.futur.aspirationsData.map((item, i) => ({
    ...item,
    image: aspirationImages[i],
    icon: aspirationIcons[i],
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
            alt="Future"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: easeLuxury }}
            className="text-xs uppercase tracking-[0.4em] text-[#CBAF73] font-medium mb-6 block"
          >
            {t.futur.aspirations}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.4, ease: easeLuxury }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6"
          >
            {t.futur.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.4, ease: easeLuxury }}
            className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto"
          >
            {t.futur.heroText}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease: easeLuxury }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: easeLuxury }}
          >
            <ArrowRight size={24} className="text-[#CBAF73] rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Aspirations */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {aspirations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: easeLuxury }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-24 items-center mb-20 lg:mb-32 last:mb-0 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-[#CBAF73]">
                      <Icon size={24} className="text-[#CBAF73]" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73]">
                      {item.subtitle}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                    {item.title}
                  </h2>
                  <p className="text-base lg:text-lg text-black/60 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#CBAF73]/30 -z-10" />
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#CBAF73]/10 -z-10" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: easeLuxury }}
            className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed italic"
          >
            "{t.futur.quote}"
          </motion.blockquote>
          <motion.cite
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.2, ease: easeLuxury }}
            className="block mt-6 text-[#CBAF73] text-sm uppercase tracking-[0.3em]"
          >
            {t.futur.quoteAuthor}
          </motion.cite>
        </div>
      </section>

      {/* Timeline to future */}
      <section id="roadmap-section" className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <SectionTitle 
            title={t.futur.roadmapTitle}
            subtitle={t.futur.roadmapSubtitle}
            align="center"
          />

          <div className="relative mt-12 lg:mt-16">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#CBAF73] via-gray-200 to-transparent" />

            {t.futur.roadmap.map((step, index) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 1.2, ease: easeLuxury }}
                className={`relative flex items-center mb-12 lg:mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <span className="text-[#CBAF73] text-sm uppercase tracking-[0.2em]">
                    {step.year}
                  </span>
                  <h3 className="text-xl font-light mt-1">{step.title}</h3>
                  <p className="text-sm text-black/50 mt-2">{step.desc}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#CBAF73]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}