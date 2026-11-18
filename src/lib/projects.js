import projectsData from '@/data/projects.json';
import projectsEn from '@/data/projects.en.json';

// Renvoie les projets dans la langue demandée (le français est la langue source).
export function getProjects(lang) {
  if (lang !== 'en') return projectsData;
  return projectsData.map((p) => ({ ...p, ...(projectsEn[p.id] || {}) }));
}
