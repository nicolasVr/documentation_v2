---
sidebar_position: 35
slug: admin_duplicate_event_fr
title: Duplication d'Événements
description: Apprenez à dupliquer des événements et à comprendre le processus de duplication.
keywords: [billetterie, événement, dupliquer, copier]
wiktags: [billetterie, événement, dupliquer, copier]
authors: Jonas
---

# Duplication d'événements

Vous pouvez dupliquer facilement des événements existants avec différentes options de date. Cette fonctionnalité est particulièrement utile pour les événements récurrents ou lorsque vous devez créer des événements similaires avec des modifications mineures.

## Comment que quoi ?

1. Connectez-vous à la page d'administration de votre instance de billetterie.
2. Naviguez vers la section **Événements** dans la barre latérale gauche.
3. Trouvez l'événement que vous souhaitez dupliquer dans la liste.
4. Dans la colonne d'actions à droite, vous verrez quatre options de duplication :
   - **Dupliquer (jour+1)** : Crée une copie de l'événement programmée pour le jour suivant
   - **Dupliquer (semaine+1)** : Crée une copie de l'événement programmée pour la semaine suivante
   - **Dupliquer (semaine+2)** : Crée une copie de l'événement programmée pour dans deux semaines
   - **Dupliquer (mois+1)** : Crée une copie de l'événement programmée pour le mois suivant

![Boutons de duplication d'événement](/img/event_duplication_buttons.jpg)

## Ce qui est dupliqué

Lorsque vous dupliquez un événement, les éléments suivants sont copiés :

- Toutes les informations de base de l'événement (nom, description, capacité, etc.)
- Produits associés
- Tags
- Options de formulaire (boutons radio et cases à cocher)
- Images principales et du carrousel (ce qui évite aussi un reupload qui dupliquerais les fichiers sur le serveur)
- **Événements enfants de type ACTION** (opportunités de bénévolat)

## Notes Importantes Sur les Événements Dupliqués

### 1. Statut de Publication

- **Les événements dupliqués ne sont pas publiés par défaut** - vous devez les modifier et cocher l'option "Publier"

### 2. Événements Action (Bénévolat)

- Les événements enfants de type ACTION sont automatiquement dupliqués
- Contrairement à l'événement parent, les événements enfants sont définis comme "Publiés" par défaut, paske si yen a beaucoup c'est relou.
- Leurs dates sont ajustées en fonction de l'option de duplication que vous avez sélectionnée (jour+1, semaine+1, semaine+2 ou mois+1)

### 3. Limitations

- Si un événement avec le même nom et la même date existe déjà, la duplication échouera (astuce, changez le nom)
- Les réservations et les billets associés à l'événement original ne sont pas dupliqués (encore heureux... )

## Exemples d'Utilisation

- **Événements hebdomadaires réguliers** : Utilisez l'option "semaine+1" pour créer rapidement l'événement de la semaine suivante
- **Événements bi-hebdomadaires** : Utilisez l'option "semaine+2" pour les événements qui ont lieu toutes les deux semaines
- **Rencontres mensuelles** : Utilisez l'option "mois+1" pour les événements mensuels récurrents
- **Festivals de plusieurs jours** : Utilisez l'option "jour+1" pour créer des événements pour des jours consécutifs
