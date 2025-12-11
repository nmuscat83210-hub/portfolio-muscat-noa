import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import PassionCard from '../components/passions/PassionCard';

const passions = [
  {
    title: "Musculation & Entraînement",
    category: "Sport",
    description: "La discipline du corps forge celle de l'esprit. Chaque séance est une quête de dépassement, où la rigueur et la constance façonnent la meilleure version de soi-même.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
  },
  {
    title: "Football",
    category: "Sport",
    description: "L'esprit d'équipe, la stratégie et la passion du jeu. Le football incarne les valeurs de cohésion et de persévérance qui me définissent.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop"
  },
  {
    title: "Piano Classique",
    category: "Musique",
    description: "Chopin, Beethoven, Bach — la musique classique comme langage de l'âme. Chaque note révèle une émotion, chaque morceau raconte une histoire intemporelle.",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop"
  },
  {
    title: "Art & Histoire de l'Art",
    category: "Culture",
    description: "De Michel-Ange à Claude Monet, d'Henri Matisse à l'architecture sacrée. L'art comme miroir de l'humanité, source inépuisable d'inspiration et de réflexion.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop"
  },
  {
    title: "Littérature",
    category: "Culture",
    description: "Le Petit Prince, Scapin, Saint Thomas d'Aquin — des œuvres qui nourrissent l'esprit et éveillent la pensée. La lecture comme voyage intérieur.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop"
  },
  {
    title: "Randonnée en Montagne",
    category: "Nature",
    description: "L'appel des sommets, la communion avec la nature. Chaque ascension est une méditation, chaque panorama une récompense de l'effort accompli.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
  }
];

export default function Passions() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <SectionTitle 
          title="Passions"
          subtitle="Ce qui m'anime"
          align="center"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg text-black/60 font-light max-w-2xl mx-auto"
        >
          Au-delà de l'ingénierie, je cultive des passions qui enrichissent 
          ma vision du monde et nourrissent ma créativité.
        </motion.p>
      </section>

      {/* Grid of Passions */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {passions.map((passion, index) => (
            <PassionCard 
              key={passion.title} 
              passion={passion} 
              index={index} 
            />
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="mt-32 py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed italic"
          >
            "La culture générale, c'est ce qui reste quand on a tout oublié."
          </motion.blockquote>
          <motion.cite
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="block mt-6 text-[#CBAF73] text-sm uppercase tracking-[0.3em]"
          >
            — Édouard Herriot
          </motion.cite>
        </div>
      </section>
    </div>
  );
}