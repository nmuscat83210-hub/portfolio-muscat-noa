import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowDown, Download, Mail } from 'lucide-react';
import GoldButton from '../components/ui/GoldButton';
import { useTranslation } from '../lib/i18n';
import { easeLuxury } from '../lib/animations';

export default function Home() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity, y, scale }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CBAF73]/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6, delay: 0.2, ease: easeLuxury }}
              className="order-2 lg:order-1"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.2, ease: easeLuxury }}
                className="text-xs uppercase tracking-[0.4em] text-[#CBAF73] font-medium mb-6 block"
              >
                {t.home.tagline}
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.4, ease: easeLuxury }}
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.1] mb-6 lg:mb-8"
              >
                <span className="font-medium">{t.home.name}</span>
                <br />
                {t.home.subtitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 1.4, ease: easeLuxury }}
                className="text-base md:text-xl text-black/60 font-light leading-relaxed mb-8 lg:mb-12 max-w-lg"
              >
                {t.home.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 1.4, ease: easeLuxury }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="https://media.base44.com/files/public/693a7c34a791a122b93f4ce7/9413ae680_CV_NOA_MUSCAT.pdf"
                  download="CV_NOA_MUSCAT.pdf"
                >
                  <GoldButton variant="primary">
                    <Download size={16} className="mr-2" />
                    {t.home.downloadCV}
                  </GoldButton>
                </a>
                
                <Link to={createPageUrl('Contact')}>
                  <GoldButton variant="secondary" icon={false}>
                    <Mail size={16} className="mr-2" />
                    {t.home.contact}
                  </GoldButton>
                </Link>
              </motion.div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6, delay: 0.6, ease: easeLuxury }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 border border-[#CBAF73]/30 -z-10" />
                <div className="absolute -inset-8 border border-black/5 -z-20" />
                <div className="w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693a7c34a791a122b93f4ce7/a40fb864e_2J8A2638-Modifier.jpg"
                    alt="Portrait"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#CBAF73]/10" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.2, ease: easeLuxury }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: easeLuxury }}
            className="flex flex-col items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-black/40">{t.home.discover}</span>
            <ArrowDown size={20} className="text-[#CBAF73]" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Intro Section */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: easeLuxury }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-[#CBAF73] font-medium mb-8 block">
              {t.home.storyLabel}
            </span>
            <div className="text-lg md:text-2xl font-light leading-relaxed text-white/90 space-y-4 lg:space-y-6">
              {t.home.story.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: i * 0.15, ease: easeLuxury }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {t.home.links.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: index * 0.15, ease: easeLuxury }}
              >
                <Link
                  to={createPageUrl(item.link)}
                  className="group block p-6 lg:p-8 border border-gray-200 hover:border-[#CBAF73] transition-all duration-500"
                >
                  <span className="text-xs text-[#CBAF73] uppercase tracking-[0.3em] mb-4 block">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-light mb-3 group-hover:text-[#CBAF73] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-black/50 font-light">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}