import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    company: "Europe Qualité",
    role: "Maître de stage — 2023/2024",
    author: "À compléter",
    text: "Ajoutez ici l'avis ou la recommandation de votre maître de stage chez Europe Qualité."
  },
  {
    company: "Kontron Modular",
    role: "Maître d'apprentissage — 2024/2026",
    author: "À compléter",
    text: "Ajoutez ici l'avis ou la recommandation de votre maître d'apprentissage chez Kontron."
  }
];

export default function Testimonials() {
  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-12 mt-20 lg:mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 lg:mb-12 text-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-[#CBAF73] font-medium mb-3 block">
          Recommandations
        </span>
        <h3 className="text-xl lg:text-2xl font-light">Avis de mes maîtres de stage</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative p-6 lg:p-8 border border-gray-100"
          >
            <Quote size={28} className="text-[#CBAF73]/30 mb-4" />
            <p className="text-sm lg:text-base text-black/60 font-light leading-relaxed italic">
              {t.text}
            </p>
            <div className="mt-6 pt-6 border-t border-gray-50">
              <p className="text-sm font-medium text-black/80">{t.author}</p>
              <p className="text-xs text-black/40 mt-1">{t.company} — {t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}