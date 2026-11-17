# Portfolio — Noa Muscat

Site portfolio (React + Vite + Tailwind), **indépendant de Base44** :

- les projets sont stockés dans `src/data/projects.json` (export de l'ancienne base Base44) ;
- les images et documents sont dans `public/assets/` ;
- aucune connexion, aucun compte ni service externe n'est nécessaire.

## Lancer en local

```bash
npm install
npm run dev
```

## Modifier le contenu

- **Projets** : éditer `src/data/projects.json` (titre, descriptions en Markdown, images, documents…).
- **Images / PDF** : déposer le fichier dans `public/assets/` puis l'appeler avec `assets/nom-du-fichier`.
- **Textes des pages** : `src/lib/translations.js` (FR / EN) et `src/pages/`.

## Mise en ligne (gratuite)

- **GitHub Pages** : déjà configuré (`.github/workflows/deploy.yml`). Dans *Settings → Pages*, choisir *Source : GitHub Actions*. Chaque push sur `main` republie le site sur `https://<utilisateur>.github.io/portfolio-muscat-noa/`.
- **Netlify / Vercel** : importer le dépôt, commande `npm run build`, dossier `dist`. Les redirections SPA sont déjà prévues (`public/_redirects`, `vercel.json`).
