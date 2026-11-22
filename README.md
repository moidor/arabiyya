# Arabiyya — application d'apprentissage de l'arabe

Application progressive en français pour étudier l'arabe littéraire moderne (fuṣḥā), avec des aperçus du levantin (libano-syrien). Version 2.2 : 36 modules (12 A2, 12 B1 et 12 B2), exercices, conjugaisons, vocabulaire et révisions.

## Utiliser l'application

- En ligne : une fois GitHub Pages activé, ouvrir **https://moidor.github.io/arabiyya/**.
- Sur Android : ouvrir ce site dans Chrome, puis choisir **Installer l'application** ou **Ajouter à l'écran d'accueil** dans le menu du navigateur.
- Sur ordinateur : ouvrir le même site dans Chrome ou Edge, ou lancer `LANCER_SUR_WINDOWS.bat` dans le dossier téléchargé.

## Activer GitHub Pages

Dans **Settings → Pages** du dépôt, sélectionner **GitHub Actions** comme source. Le workflow `.github/workflows/deploy.yml` prépare et publie automatiquement le site à chaque commit sur `main`. Suivre l’état dans l’onglet **Actions**.

## Lecture audio en arabe (version 2.2)

Dans **Réglages → Lecture audio en arabe**, cliquer sur **Actualiser les voix**, sélectionner une voix si elle est disponible, puis sur **Tester la voix arabe**.

- Si aucune voix arabe n’est trouvée, installer une voix arabe dans les paramètres de synthèse vocale du téléphone ou de l’ordinateur.
- Sur Android, ouvrir le site dans Chrome, vérifier la synthèse vocale et le volume multimédia.
- Sur Windows, vérifier les langues et composants vocaux dans **Paramètres → Heure et langue**.
- Le résultat dépend des voix installées et du navigateur. Arabiyya 2.2 ne contient pas encore d’enregistrements humains ni de serveur de synthèse vocale.
- Après une mise à jour, recharger le site si l’ancienne interface reste en cache.

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
