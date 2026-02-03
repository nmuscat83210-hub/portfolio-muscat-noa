import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import SectionTitle from '../components/ui/SectionTitle';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: (data) => base44.entities.Contact.create(data),
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "n.muscat83210@gmail.com", href: "mailto:n.muscat83210@gmail.com" },
    { icon: Phone, label: "Téléphone", value: "07 63 54 94 40", href: "tel:+33763549440" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/noa-muscat", href: "https://www.linkedin.com/in/noa-muscat" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <SectionTitle 
          title="Contact"
          subtitle="Échangeons"
          align="center"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-black/60 font-light max-w-2xl mx-auto"
        >
          Une question, une opportunité, une collaboration ?
          N'hésitez pas à me contacter.
        </motion.p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-light mb-8 text-center">Coordonnées</h3>
          
          <div className="space-y-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center gap-6 p-6 border border-gray-200 hover:border-[#CBAF73] transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gray-200 group-hover:border-[#CBAF73] group-hover:bg-[#CBAF73]/5 transition-all">
                  <item.icon size={20} className="text-black/60 group-hover:text-[#CBAF73] transition-colors" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-black/40 block mb-1">
                    {item.label}
                  </span>
                  <span className="text-lg font-light group-hover:text-[#CBAF73] transition-colors">
                    {item.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Availability */}
          <div className="p-8 bg-gray-50">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#CBAF73] mb-3">
              Disponibilité
            </h4>
            <p className="text-black/60 font-light leading-relaxed">
              Actuellement en 3ème année de BUT GEII en alternance chez Kontron Modular. 
              Ouvert aux opportunités pour la rentrée 2025 en école d'ingénieur.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}