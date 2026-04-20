# Portfolio App

Application portfolio personnelle développée avec Angular 20, SCSS et Tailwind CSS 4.

Le projet présente un profil de développeur backend oriente Java/Spring, une page de projets alimentée par des donnees
locales, une page "about" avec experiences et competences, ainsi qu'une page de contact avec formulaire Angular.

## Apercu

L'application est structurée autour de 4 routes principales :

- `/` : page d'accueil
- `/projects` : liste des projets avec filtre et pagination
- `/about` : presentation, competences et experiences
- `/contact` : formulaire de contact avec dialogue de redirection vers LinkedIn

## Stack technique

- Angular 20 en mode standalone
- Angular Router
- Reactive Forms
- SCSS
- Tailwind CSS 4
- Jasmine + Karma pour les tests
- ESLint + angular-eslint
- Prettier pour le formatage

## Fonctionnalites

- Navigation simple entre les sections du portfolio
- Chargement des projets depuis [`src/projects.json`](portofolio-app/src/projects.json)
- Chargement du contenu de presentation depuis [`src/about.json`](portofolio-app/src/about.json)
- Filtrage des projets par mots-cles sur les tags
- Tri des projets par identifiant
- Pagination cote client sur la page projets
- Formulaire de contact avec validations Angular

## Limitation actuelle

Le formulaire de contact ne transmet pas encore de message vers un backend ou un service externe. Lorsqu'il est valide,
il ouvre un dialogue qui invite l'utilisateur à contacter le proprietaire du portfolio sur LinkedIn.

## Structure utile

```text
src/
  app/
    components/
      core/
      reusable/
    pages/
      home/
      projects/
      about/
      contact/
    services/
  about.json
  projects.json
public/
  prank.gif
  doc-202604-ar.pdf
```

## Demarrage local

### Prerequis

- Node.js recent
- npm
- Angular CLI via les scripts npm du projet

### Installation

```bash
npm install
```

### Lancer le projet

```bash
npm start
```

Application disponible ensuite sur `http://localhost:4200/`.

## Scripts disponibles

```bash
npm start    # lance le serveur de developpement
npm run build
npm run watch
npm run test
npm run lint
npm run format
```

## Docker

Le projet Angular peut etre construit et servi en conteneur via Nginx avec un build multi-stage.

Fichiers concernes :

- [`Dockerfile`](portofolio-app/Dockerfile)
- [`nginx.conf`](portofolio-app/nginx.conf)
- [`.dockerignore`](portofolio-app/.dockerignore)

### Construire l'image

Depuis la racine du repository :

```bash
docker build -t portofolio-app ./portofolio-app
```

### Lancer le conteneur

```bash
docker run --rm -p 8080:8080 portofolio-app
```

Application disponible ensuite sur `http://localhost:8080/`.

## Donnees de contenu

Le contenu principal du portfolio est gère localement :

- [`src/about.json`](portofolio-app/src/about.json) : description, competences, experiences
- [`src/projects.json`](portofolio-app/src/projects.json) : projets, categories, statuts, tags, illustrations

Modifier ces fichiers suffit pour mettre a jour une grande partie du site sans toucher aux composants Angular.

## Pistes d'amelioration

- Connecter le formulaire de contact a un vrai service d'envoi
- Ajouter des tests supplementaires sur les composants interactifs
- Remplacer certaines ressources distantes d'images par des assets maitrises localement
- Ajouter une section de deploiement selon la plateforme cible
