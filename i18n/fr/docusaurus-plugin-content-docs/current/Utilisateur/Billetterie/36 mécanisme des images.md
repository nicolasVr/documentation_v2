---
sidebar_position: 36
slug: image_mechanism
title: Mécanisme des Images
description: Comprendre comment les images sont affichées dans TiBillet.
keywords: [billetterie, ticketing, event, images]
wiktags: [billetterie, ticketing, event, images]
authors: Jonas
---

# Mécanisme des Images dans TiBillet

TiBillet utilise un mécanisme sophistiqué d'images qui garantit que les événements ont toujours des images appropriées affichées, même si elles n'ont pas été explicitement définies pour un événement particulier.

## Ordre de Priorité pour les Images

Le système suit un ordre de priorité spécifique pour déterminer quelle image afficher :

### Image Principale (affichée dans l'en-tête de la page de l'événement)

1. **Image principale de l'événement** - L'image téléchargée directement sur l'événement
2. **Image principale de l'adresse** - Si aucune image d'événement n'est disponible, le système utilise l'image de l'adresse de l'événement
3. **Image d'arrière-plan de la configuration** - Si ni les images de l'événement ni celles de l'adresse ne sont disponibles, le système utilise l'image d'arrière-plan de la configuration du site

### Image Vignette (affichée dans les listes d'événements)

1. **Image vignette de l'événement** - La petite image téléchargée directement sur l'événement pour une utilisation dans les listes
2. **Image vignette de l'adresse** - Si aucune image vignette d'événement n'est disponible, le système utilise l'image vignette de l'adresse de l'événement
3. **Logo de la configuration** - Si ni les images vignettes de l'événement ni celles de l'adresse ne sont disponibles, le système utilise le logo de la configuration du site
4. **Image principale** - Si aucune des images ci-dessus n'est disponible, le système utilise l'image principale (suivant l'ordre de priorité décrit ci-dessus)

## Événements Fédérés

Ce mécanisme d'image fonctionne parfaitement avec les événements fédérés également. Lorsque des événements sont partagés entre différentes instances de TiBillet, les images appropriées sont affichées selon les mêmes règles de priorité, assurant une expérience visuelle cohérente à travers la fédération.

## Optimisation des Performances

Le mécanisme d'image inclut une mise en cache pour optimiser les performances. Les images sont mises en cache pendant une heure, réduisant les requêtes à la base de données et améliorant les temps de chargement des pages.

## Captures d'écran

![](/img/vue_events_liste.jpg)

## Configuration Admin

Dans l'interface d'administration, vous pouvez définir des images à différents niveaux :

### Niveau Événement
- **Image principale** - L'image principale de l'événement, affichée dans l'en-tête de la page de l'événement et pour les partages sociaux
- **Image vignette** - La petite image affichée dans la liste des événements (ratio 4:3)
- **Diapositives du carrousel** - Images qui seront affichées dans la section programme

### Niveau Adresse
- **Image principale** - L'image principale de l'adresse, affichée dans l'en-tête de la page de l'événement si aucune image n'est définie sur l'événement
- **Image vignette** - La petite image affichée dans la liste des événements si aucune image vignette n'est définie sur l'événement (ratio 4:3)

### Niveau Configuration
- **Image d'arrière-plan** - Utilisée comme solution de repli lorsqu'aucune image principale d'événement ou d'adresse n'est disponible
- **Logo** - Utilisé comme solution de repli lorsqu'aucune image vignette d'événement ou d'adresse n'est disponible