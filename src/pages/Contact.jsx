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
    { icon: Mail, label: "Email", value: "contact@exemple.com", href: "mailto:contact@exemple.com" },
    { icon: Phone, label: "Téléphone", value: "+33 6 XX XX XX XX", href: "tel:+33600000000" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/profil", href: "https://linkedin.com" }
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
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light mb-8">Coordonnées</h3>
            
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light mb-8">Envoyer un message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 border border-[#CBAF73]"
              >
                <CheckCircle size={48} className="mx-auto text-[#CBAF73] mb-6" />
                <h4 className="text-xl font-light mb-2">Message envoyé</h4>
                <p className="text-black/50 font-light">
                  Je vous répondrai dans les plus brefs délais.
                </p>
                <Button
                  variant="ghost"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Envoyer un autre message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-black/40 mb-2 block">
                      Nom complet
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-gray-200 focus:border-[#CBAF73] rounded-none h-12"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-black/40 mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-gray-200 focus:border-[#CBAF73] rounded-none h-12"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-black/40 mb-2 block">
                    Sujet
                  </label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="border-gray-200 focus:border-[#CBAF73] rounded-none h-12"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-black/40 mb-2 block">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="border-gray-200 focus:border-[#CBAF73] rounded-none resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full h-14 bg-[#CBAF73] hover:bg-[#b89d5f] text-black rounded-none uppercase tracking-[0.2em] text-sm font-medium"
                >
                  {mutation.isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Envoyer
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}