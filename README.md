# Arabiyya — application d'apprentissage de l'arabe

Application progressive en français pour étudier l'arabe littéraire moderne (fuṣḥā), avec des aperçus du levantin (libano-syrien). Version 2.1 : 36 modules (12 A2, 12 B1 et 12 B2), exercices, conjugaisons, vocabulaire et révisions.

## Utiliser l'application

- En ligne : une fois GitHub Pages activé, ouvrir **https://moidor.github.io/arabiyya/**.
- Sur Android : ouvrir ce site dans Chrome, puis choisir **Installer l'application** ou **Ajouter à l'écran d'accueil** dans le menu du navigateur.
- Sur ordinateur : ouvrir le même site dans Chrome ou Edge, ou lancer `LANCER_SUR_WINDOWS.bat` dans le dossier téléchargé.

## Activer GitHub Pages

Dans **Settings → Pages** du dépôt, sélectionner **Deploy from a branch**, branche **main** et dossier **/(root)**. Enregistrer et attendre la fin de la publication.

## Suivi de progression

Les progrès sont sauvegardés **localement dans le navigateur**. Pour changer d'appareil ou de navigateur, utiliser **Réglages → Exporter mes progrès**, puis importer la sauvegarde depuis le nouvel appareil. Il n'y a pas encore de synchronisation automatique.

## Notes pédagogiques

Le calendrier et le score des quiz sont indicatifs : ils n'attestent pas officiellement un niveau CECRL. Les équivalents levantins sont des aides à la compréhension, sans graphie dialectale unique. Les synthèses vocales dépendent du navigateur et ne remplacent pas une prononciation vérifiée par un locuteur.

## Structure

- `index.html` : entrée de l'application
- `courses.js` : contenu pédagogique, à enrichir sans modifier les identifiants existants
- `app.js` / `styles.css` : interface interactive
- `sw.js` / `manifest.webmanifest` / `assets/` : installation PWA
- `VERIFIER_MODULES.html` : diagnostic des cours chargés

Licence : non définie à ce stade.
