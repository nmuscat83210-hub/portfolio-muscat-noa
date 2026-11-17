import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Remonte en haut de page à chaque changement de page (sauf ancre #section).
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, search, hash]);
  return null;
}
