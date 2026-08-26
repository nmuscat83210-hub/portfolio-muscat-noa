import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Mail, Linkedin } from 'lucide-react';
import { useTranslation } from '../lib/i18n';
import { easeLuxury } from '../lib/animations';

export default function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    { icon: Mail, label: t.contact.labels.email, value: "n.muscat83210@gmail.com", href: "mailto:n.muscat83210@gmail.com" },
    { icon: Linkedin, label: t.contact.labels.linkedin, value: "linkedin.com/in/noa-muscat", href: "https://www.linkedin.com/in/noa-muscat" }
  ];

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 lg:mb-24">
        <SectionTitle 
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          align="center"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: easeLuxury }}
          className="text-center text-base lg:text-lg text-black/60 font-light max-w-2xl mx-auto"
        >
          {t.contact.intro}
        </motion.p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: easeLuxury }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-xl lg:text-2xl font-light mb-8 text-center">{t.contact.details}</h3>
          
          <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-12">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'LinkedIn' || item.label === t.contact.labels.linkedin ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' || item.label === t.contact.labels.linkedin ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 1.2, ease: easeLuxury }}
                className="group flex items-center gap-4 lg:gap-6 p-4 lg:p-6 border border-gray-200 hover:border-[#CBAF73] transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gray-200 group-hover:border-[#CBAF73] group-hover:bg-[#CBAF73]/5 transition-all">
                  <item.icon size={20} className="text-black/60 group-hover:text-[#CBAF73] transition-colors" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-black/40 block mb-1">
                    {item.label}
                  </span>
                  <span className="text-base lg:text-lg font-light group-hover:text-[#CBAF73] transition-colors">
                    {item.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Availability */}
          <div className="p-6 lg:p-8 bg-gray-50">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] mb-3">
              {t.contact.availability}
            </h4>
            <p className="text-black/60 font-light leading-relaxed">
              {t.contact.availabilityText}
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}