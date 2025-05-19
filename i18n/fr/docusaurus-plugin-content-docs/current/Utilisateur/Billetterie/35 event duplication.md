---
sidebar_position: 35
slug: admin_duplicate_event_fr
title: Duplication d'Événements
description: Apprenez à dupliquer des événements et à comprendre le processus de duplication.
keywords: [billetterie, événement, dupliquer, copier]
wiktags: [billetterie, événement, dupliquer, copier]
authors: Jonas
---

# Duplication d'Événements

TiBillet vous permet de dupliquer facilement des événements existants avec différentes options de date. Cette fonctionnalité est particulièrement utile pour les événements récurrents ou lorsque vous devez créer des événements similaires avec des modifications mineures.

## Comment Dupliquer un Événement

1. Connectez-vous à la page d'administration de votre instance de billetterie.
2. Naviguez vers la section **Événements** dans la barre latérale gauche.
3. Trouvez l'événement que vous souhaitez dupliquer dans la liste.
4. Dans la colonne d'actions à droite, vous verrez trois options de duplication :
   - **Dupliquer (jour+1)** : Crée une copie de l'événement programmée pour le jour suivant
   - **Dupliquer (semaine+1)** : Crée une copie de l'événement programmée pour la semaine suivante
   - **Dupliquer (mois+1)** : Crée une copie de l'événement programmée pour le mois suivant

![Boutons de duplication d'événement](/img/event_duplication_buttons.jpg)

## Ce Qui Est Dupliqué

Lorsque vous dupliquez un événement, les éléments suivants sont copiés :

- Toutes les informations de base de l'événement (nom, description, capacité, etc.)
- Produits associés
- Tags
- Options de formulaire (boutons radio et cases à cocher)
- Images du carrousel
- **Événements enfants de type ACTION** (opportunités de bénévolat)

## Notes Importantes Sur les Événements Dupliqués

### 1. Nom de l'Événement et Statut de Publication

- L'événement dupliqué aura le même nom que l'original mais avec le préfixe **[DUPLICATE]** ajouté
- **Vous devez supprimer le préfixe [DUPLICATE]** avant de publier l'événement
- **Les événements dupliqués ne sont pas publiés par défaut** - vous devez les modifier et cocher l'option "Publier"

### 2. Événements Enfants (Bénévolat)

- Les événements enfants de type ACTION sont automatiquement dupliqués
- Contrairement à l'événement parent, les événements enfants sont définis comme "Publiés" par défaut
- Leurs dates sont ajustées en fonction de l'option de duplication que vous avez sélectionnée (jour+1, semaine+1 ou mois+1)

### 3. Limitations

- Si un événement avec le même nom et la même date existe déjà, la duplication échouera
- Les réservations et les billets associés à l'événement original ne sont pas dupliqués

## Modification d'un Événement Dupliqué

Après avoir dupliqué un événement, vous devriez :

1. Modifier l'événement dupliqué pour supprimer le préfixe **[DUPLICATE]** du nom
2. Vérifier tous les détails de l'événement pour s'assurer qu'ils sont corrects
3. Activer l'option "Publier" pour rendre l'événement visible dans le calendrier
4. Enregistrer vos modifications

## Exemples d'Utilisation

- **Événements hebdomadaires réguliers** : Utilisez l'option "semaine+1" pour créer rapidement l'événement de la semaine suivante
- **Rencontres mensuelles** : Utilisez l'option "mois+1" pour les événements mensuels récurrents
- **Festivals de plusieurs jours** : Utilisez l'option "jour+1" pour créer des événements pour des jours consécutifs