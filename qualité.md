# QUALITE.md


## 1. Accessibilité

### Audit Lighthouse

| Critère | Méthode | Résultat |
|---|---|---|
| Accessibilité générale | Lighthouse | 100 / 100 |
| Contrastes | Lighthouse | Conforme |
| Structure HTML | Lighthouse et inspection du code | Conforme |
| Images | Vérification des attributs `alt` | Conforme sur les éléments principaux |

### Navigation clavier

La navigation doit rester utilisable sans souris.

Éléments contrôlés :

- navigation principale ;
- menu mobile ;
- boutons ;
- liens vers les projets ;
- liens externes ;
- réseaux sociaux ;
- formulaire de contact.

Méthode utilisée :

`Tab`, `Shift + Tab`, `Entrée` et `Échap`.

Le site utilise `:focus-visible` pour identifier l'élément actuellement sélectionné.

### Responsive

Le site a été adapté aux principales tailles d'écran :

| Largeur | Usage |
|---|---|
| 1440 px | Desktop |
| 1280 px | Desktop |
| 1024 px | Ordinateur portable |
| 768 px | Tablette |
| 430 px | Mobile |
| 390 px | Mobile |
| 375 px | Mobile |

Corrections réalisées :

- réduction de la taille du header sur mobile ;
- création d'un menu coulissant depuis la droite ;
- réduction du footer sur mobile ;
- correction des chevauchements de texte ;
- adaptation du logo ;
- adaptation des grilles ;
- adaptation des tailles de texte avec des media queries et `clamp()`.

### Images

Les images utiles possèdent un texte alternatif.

Les éléments purement décoratifs utilisent :

```html
alt=""
```

Les icônes dont le nom est déjà indiqué dans le texte n'ont pas besoin de répéter cette information dans leur attribut `alt`.

### Animations

Le site utilise :

- AOS ;
- GSAP ;
- ScrollTrigger ;
- animations CSS.

Le site prend en compte la préférence utilisateur :

```css
@media (prefers-reduced-motion: reduce)
```

Les animations non essentielles sont désactivées ou réduites lorsque cette préférence est active.

---

## 2. Sobriété et performance

### Résultats Lighthouse

| Mesure | Résultat |
|---|---:|
| Performance | 100 / 100 |
| Bonnes pratiques | 100 / 100 |
| Largest Contentful Paint | 0,5 s |
| Total Blocking Time | 0 ms |
| Cumulative Layout Shift | 0,01 |
| Speed Index | 0,5 s |

### Choix techniques

Le portfolio est développé avec Astro.

Le site génère principalement du HTML statique et limite l'utilisation du JavaScript aux fonctionnalités qui en ont besoin :

- navigation mobile ;
- animations ;
- interactions.

Aucun framework comme React, Vue ou Svelte n'est utilisé.

Le design repose principalement sur du CSS natif avec :

- Flexbox ;
- CSS Grid ;
- variables CSS ;
- media queries ;
- `clamp()`.

### Animations

AOS est utilisé pour les animations simples au scroll.

GSAP est utilisé pour les animations nécessitant davantage de contrôle.

Les animations utilisent principalement :

```css
transform
opacity
```

Ces propriétés limitent les recalculs de mise en page.

### Images

Points contrôlés :

- dimensions adaptées à leur affichage ;
- chargement différé pour les images hors écran lorsque nécessaire ;
- poids des images limité ;
- utilisation de formats adaptés lorsque possible.

### Mesures complémentaires

Le poids total de la page peut être contrôlé avec :

`Chrome DevTools > Network`

Mesures à relever :

```text
Poids total de la page :
Nombre de requêtes :
```

Un test EcoIndex peut compléter l'analyse Lighthouse.

---

## 3. Référencement

### Audit Lighthouse

**Score SEO : 100 / 100**

### URLs

Les principales pages utilisent des URLs lisibles :

```text
/
/projets/
/projets/zozzo/
/projets/olyvia/
/projets/washroll/
/competences/
/a-propos/
/contact/
```

### Titres

Chaque page possède un titre spécifique.

Exemples :

```text
Rahma Hamdi | Portfolio
Projets | Rahma Hamdi
Compétences | Rahma Hamdi
ZOZZO | Rahma Hamdi
OLYVIA | Rahma Hamdi
WASHROLL | Rahma Hamdi
Contact | Rahma Hamdi
```

### Structure HTML

Le site utilise une structure sémantique :

```html
<header>
<nav>
<main>
<section>
<footer>
```

La hiérarchie des titres repose sur :

```text
h1
h2
h3
```

Un titre principal est utilisé pour chaque page.

### Meta données

Les pages doivent contenir :

```html
<title>
<meta name="description">
```

Les métadonnées Open Graph peuvent également être utilisées pour améliorer l'affichage du portfolio lors d'un partage sur les réseaux sociaux :

```html
<meta property="og:title">
<meta property="og:description">
<meta property="og:image">
<meta property="og:url">
```

### Navigation interne

Le site relie les principales sections :

- Accueil ;
- Projets ;
- Compétences ;
- À propos ;
- Contact.

Les pages projets sont également reliées au reste du portfolio.

### Autres éléments SEO

Le site utilise un favicon personnalisé.

Les éléments suivants doivent également être contrôlés :

```text
/robots.txt
/sitemap.xml
/404
```

---

## 4. Conformité juridique

### HTTPS

Le portfolio est accessible en HTTPS :

```text
https://rahma-portfolio.rahmaproject.fr/
```

Les échanges entre le navigateur et le serveur sont donc chiffrés.

### Formulaire de contact

Le formulaire peut collecter :

- prénom ;
- nom ;
- adresse e-mail ;
- objet ;
- message.

L'utilisateur doit être informé de l'utilisation de ces données.

Les données doivent uniquement servir à répondre aux demandes reçues via le formulaire.

### Mentions légales

Les informations suivantes doivent être disponibles :

- identité de l'éditrice du site ;
- moyen de contact ;
- hébergeur du site.

### Cookies

Les cookies peuvent être contrôlés depuis :

`Chrome DevTools > Application > Cookies`

Une bannière de consentement n'est nécessaire que si le site utilise des cookies ou services qui nécessitent le consentement de l'utilisateur.

### Ressources graphiques

Les ressources utilisées sur le portfolio doivent avoir une origine identifiable :

- illustrations ;
- icônes ;
- logos ;
- polices ;
- captures d'écran.

Les logos de logiciels et de réseaux sociaux restent la propriété de leurs marques respectives.

### Projets collectifs

Certains projets présentés ont été réalisés en groupe.

Les pages projets doivent clairement distinguer :

- le travail réalisé par le groupe ;
- mon rôle ;
- mes missions personnelles.

Les contenus appartenant à d'autres personnes doivent être utilisés avec leur accord lorsque nécessaire.

---

## 5. Contrôles techniques

### Console JavaScript

La console du navigateur doit être contrôlée avant le rendu.

Objectif :

```text
0 erreur JavaScript
```


### Validation HTML W3C

Le validateur W3C signale une erreur `Stray start tag script`.

L'erreur provient d'un script ajouté automatiquement par Netlify après la balise `</html>` :

`/.netlify/scripts/hud?variant=public`

Ce script ne fait pas partie du code source du portfolio. Le HTML généré par Astro est valide avant l'injection réalisée par l'hébergeur Netlify.

### Liens

Les liens suivants fonctionnent tous :

- navigation principale ;
- menu mobile ;
- footer ;
- pages projets ;
- LinkedIn ;
- Behance ;
- Instagram ;
- liens vers les sites des projets ;
- formulaire ;
- 

Aucun lien ne doit mener vers une erreur 404 involontaire.

---

## 6. Corrections réalisées

Les principales corrections effectuées pendant le développement sont :

- réduction des tailles de texte ;
- amélioration du responsive ;
- création d'un menu mobile ;
- menu mobile coulissant depuis la droite ;
- réduction du header sur mobile ;
- réduction du footer sur mobile ;
- correction des chevauchements de texte ;
- adaptation du logo selon la taille de l'écran ;
- adaptation des grilles ;
- amélioration des espacements ;
- ajout d'un focus clavier visible ;
- gestion de `prefers-reduced-motion` ;
- ajout d'un favicon ;
- harmonisation des titres des pages ;
- utilisation de composants Astro réutilisables.

---

## 7. Résultats finaux

| Catégorie Lighthouse | Score |
|---|---:|
| Performance | 100 |
| Accessibilité | 100 |
| Bonnes pratiques | 100 |
| SEO | 100 |

| Indicateur | Valeur |
|---|---:|
| LCP | 0,5 s |
| Total Blocking Time | 0 ms |
| CLS | 0,01 |
| Speed Index | 0,5 s |
