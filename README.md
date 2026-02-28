# ORMA — Structure du site

## 📁 Architecture

```
orma-site/
├── index.html              (Page d'accueil Welcome)
├── about.html              (Philosophy / À propos)
├── inner-garden.html       (Inner Garden avec process détaillé)
├── works.html              (Portfolio avec 3 projets)
├── contact.html            (Formulaire de contact)
├── css/
│   └── style.css          (Styles globaux partagés)
├── js/
│   └── main.js            (JavaScript pour navigation + animations)
└── images/
    ├── welcome-bg.jpg     (Fond aquarelle pour Welcome)
    ├── concept-inner.jpg  (Image concept Inner Garden)
    ├── concept-outer.jpg  (Image concept Outer Spaces)
    ├── inner-*.jpg        (7 images de livrables Inner Garden)
    └── work-*.jpg         (3 images de projets Works)
```

## 🎨 Pages créées

### 1. **index.html** — Welcome (Homepage)
- Fond aquarelle extrait de ta maquette
- Texte poétique centré
- Logo organique blanc
- CTA vers About

### 2. **about.html** — Philosophy
- Manifeste "A garden is not decoration"
- Structure de contenu persuasive
- CTA vers Inner Garden

### 3. **inner-garden.html** — Inner Garden
- 5 étapes du process détaillées (deep listening, artistic direction, living composition, artisan coordination, evolution)
- Galerie de livrables avec **tes vraies images extraites** (plans, palettes, renders, photos chantier)
- Section pricing "sur devis"
- CTA vers Contact

### 4. **works.html** — Portfolio
- 3 projets avec **tes images extraites** de Works.png
- Descriptions placeholder (à personnaliser)
- Structure carte avec hover effects

### 5. **contact.html** — Contact
- Formulaire personnalisé (nom, email, "What draws you to ORMA?", message)
- Coordonnées (à mettre à jour)
- Note "We respond within 48 hours"

## ✅ Images extraites et intégrées

Toutes les images de tes maquettes ont été extraites automatiquement :

- **Welcome** : Fond aquarelle vert → `welcome-bg.jpg`
- **Inner Garden** : 7 livrables (photo jardin, palette végétale, textures, plans, doc, render 3D, chantier)
- **Works** : 3 projets (plans verticaux et renders)
- **Concepts** : Images Inner/Outer Garden pour page Outer Spaces (à créer)

## 🔧 Comment personnaliser

### Modifier les textes
Ouvre les fichiers HTML dans VS Code ou Notepad++, cherche le texte et remplace-le directement.

### Remplacer une image
1. Mets ta nouvelle image dans `/images/`
2. Dans le HTML, cherche `<img src="images/nom-ancien.jpg">`
3. Change par `<img src="images/nom-nouveau.jpg">`

### Ajouter une page (ex: Outer Spaces)
1. Copie `inner-garden.html`
2. Renomme en `outer-spaces.html`
3. Change les textes et images
4. Ajoute le lien dans la navigation de toutes les pages

### Modifier les couleurs
Ouvre `css/style.css`, section `:root`, change les valeurs des variables CSS :
```css
:root {
  --klein: #002FA7;   /* Bleu Klein */
  --cream: #FAF9F6;   /* Fond crème */
  --black: #0A0A0A;   /* Noir */
}
```

## 🚀 Hébergement

### Option 1 : Netlify (recommandé, gratuit)
1. Va sur netlify.com
2. Glisse-déposer le dossier `orma-site/` entier
3. Connecte ton domaine GoDaddy (voir guide PDF)

### Option 2 : GoDaddy cPanel
1. Connecte-toi à ton cPanel GoDaddy
2. File Manager → `public_html/`
3. Upload tous les fichiers du dossier `orma-site/`

## 📋 Pages manquantes à créer

- **outer-spaces.html** (copier inner-garden.html et adapter)
- **Page mentions légales** (si nécessaire)

## 🎨 Fonts utilisées

- **Crimson Text** (serif, élégant) pour les titres
- **DM Sans** (sans-serif, raffiné) pour le corps

Chargées via Google Fonts (gratuit, aucune dépendance locale).

## ✨ Animations

- Scroll reveal sur tous les éléments `.reveal`
- Navigation qui change de style au scroll
- Hover effects sur images et boutons
- Page transitions smooth

---

**Prochaines étapes :**
1. Personnaliser les textes (bio, projets, coordonnées)
2. Remplacer les images placeholder si nécessaire
3. Créer la page Outer Spaces
4. Tester sur mobile
5. Héberger avec Netlify ou GoDaddy
