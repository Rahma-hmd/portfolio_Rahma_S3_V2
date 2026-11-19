# Journal de bord : portfolio S3



## Semaine 1 : 

**Fait**
- J'ai créé le projet Astro avec Bun et rangé mes dossiers : pages, composants, layouts, données, styles.
- J'ai mis mes couleurs en variables dans `global.css` et écrit mes classes de base (`pixel-panel`, `pixel-btn`, `label`).
- J'ai placé le header et le footer dans `Layout.astro` pour les écrire une seule fois.

**Coincé**
- Press Start 2P est illisible dans un paragraphe.
- Je recopiais les liens du menu dans le header et dans le footer.

**Décidé**
- Press Start 2P pour les titres, Inter pour les textes.
- Les liens du menu dans un seul fichier, `navigation.js`.
- Ni React ni Tailwind : je veux pouvoir expliquer chaque ligne.

---

## Semaine 2 : 

**Fait**
- J'ai monté les pages accueil, à propos, compétences et ZOZZO.
- J'ai branché le formulaire de contact sur Netlify Forms, avec une page de remerciement.
- J'ai ajouté les animations au scroll (AOS) et fait tourner mes projets sous forme de fichiers 8 bits (`ProjectBarrel`).

**Coincé**
- Les profs ont trouvé le style 8 bits trop timide.
- Sur ordinateur, mes textes et mes éléments graphiques étaient trop gros.

**Décidé**
- Tout réduire sur desktop.
- Bordures épaisses, ombres dures, aucun coin arrondi, sur tout le site.
- Les fichiers 8 bits restent ma façon principale de présenter mes projets.

---

## Semaine 3 :

**Fait**
- J'ai écrit les pages OLYVIA et WASHROLL à partir de mes dossiers de SAÉ.
- J'ai regroupé le style des pages projet dans un seul fichier, `projet.css`.
- J'ai rangé les textes de chaque projet dans des tableaux, affichés avec `.map()`.


**Décidé**
- Trois blocs par projet : présentation, mon rôle, compétences avec une preuve.
- Pas de vidéo : un lien vers le site et une capture d'écran suffisent.
- Je me suis aidée d'un assistant IA pour structurer le code et reformuler mes textes. J'ai relu chaque fichier pour pouvoir l'expliquer.


## Semaine 4 : 

**Fait**
- J'ai ajouté les compétences de mon CV, classées dans les cinq compétences du BUT MMI.
- J'ai créé la section « Outils que je sais utiliser », avec des icônes en pixel art.
- J'ai mis un effet au survol sur toutes les cartes.

**Coincé**
- Le texte touchait le bord des cartes, et les cartes se touchaient entre elles.
- Elles n'avaient pas la même hauteur : dix lignes dans « Exprimer », deux dans « Entreprendre ».

**Décidé**
- Plus de marge dans les cartes et plus d'espace entre elles.
- Quatre compétences visibles, un bouton « Suite » pour les autres, et `grid-auto-rows: 1fr` pour égaliser les hauteurs.
- Un survol saccadé avec `steps()`, coupé par `prefers-reduced-motion`.



## Semaine 5 : 
**Fait**
- J'ai refait la page ZOZZO sur le modèle des deux autres, avec les liens vers le site et Instagram.
- J'ai placé mon nom et l'image « À propos » dans des onglets 8 bits sur l'accueil.
- J'ai ajouté les icônes LinkedIn et Behance dans le footer.
- J'ai remplacé les tirets par « | » dans les titres d'onglet et changé le favicon.

**Coincé**
- Un texte s'affichait sous les fichiers 8 bits, dont un texte provisoire oublié.
- J'ai failli écraser mon animation en corrigeant la page projets.
- Mon logo n'avait pas le même nom dans le code et dans le dossier : un tiret de différence.

**Décidé**
- Seul le nom du projet apparaît sur les fichiers 8 bits.
- Je copie un fichier avant de le remplacer en entier.
- Je vérifie chaque nom de fichier lettre par lettre.

