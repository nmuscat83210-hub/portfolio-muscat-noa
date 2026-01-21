import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './components/LanguageContext';
import { translations } from './components/translations';

export default function Layout({ children, currentPageName }) {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, page: 'Home' },
    { name: t.nav.passions, page: 'Passions' },
    { name: t.nav.parcours, page: 'Parcours' },
    { name: t.nav.competences, page: 'Competences' },
    { name: t.nav.projets, page: 'Projets' },
    { name: t.nav.experience, page: 'ExperiencePro' },
    { name: t.nav.futur, page: 'Futur' },
    { name: t.nav.contact, page: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --black: #000000;
          --white: #FFFFFF;
          --gray: #E8E8E8;
          --gold: #CBAF73;
        }
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
        }
        
        .gold-accent {
          color: var(--gold);
        }
        
        .gold-bg {
          background-color: var(--gold);
        }
        
        .gold-border {
          border-color: var(--gold);
        }
        
        ::selection {
          background: var(--gold);
          color: var(--black);
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
      `}</style>

      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to={createPageUrl('Home')} 
              className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity"
            >
              <span className="gold-accent">P</span>ortfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`nav-link text-xs font-medium tracking-wide uppercase transition-colors hover:gold-accent ${
                    currentPageName === item.page ? 'active gold-accent' : 'text-black/80'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 hover:border-[#CBAF73] transition-colors group"
                title={language === 'fr' ? 'Switch to English' : 'Passer en français'}
              >
                <Languages size={16} className="text-black/60 group-hover:text-[#CBAF73] transition-colors" />
                <span className="text-xs font-medium uppercase">{language === 'fr' ? 'EN' : 'FR'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 hover:opacity-70 transition-opacity"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-8 space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.page}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={createPageUrl(item.page)}
                      onClick={() => setMenuOpen(false)}
                      className={`block text-lg font-medium tracking-wide ${
                        currentPageName === item.page ? 'gold-accent' : 'text-black/80'
                      }`}
                    >
                      {item.name}
                      </Link>
                      </motion.div>
                      ))}

                      {/* Mobile Language Toggle */}
                      <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navItems.length * 0.05 }}
                      >
                      <button
                      onClick={() => {
                      toggleLanguage();
                      setMenuOpen(false);
                      }}
                      className="flex items-center gap-3 text-lg font-medium tracking-wide text-black/80"
                      >
                      <Languages size={20} />
                      {language === 'fr' ? 'English' : 'Français'}
                      </button>
                      </motion.div>
                      </div>
                      </motion.div>
                      )}
                      </AnimatePresence>
                      </motion.header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-black/50 tracking-wide">
              © {new Date().getFullYear()} Portfolio. {t.footer.rights}
            </p>
            <div className="flex items-center gap-8">
              {navItems.slice(0, 4).map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className="text-xs uppercase tracking-wider text-black/50 hover:text-black transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}