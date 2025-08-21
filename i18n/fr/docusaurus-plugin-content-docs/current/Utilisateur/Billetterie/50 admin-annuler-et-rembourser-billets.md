---
sidebar_position: 50
slug: admin_cancel_refund_tickets
title: Annuler et rembourser des billets (côté Admin)
description: Guide pour les administrateurs — utiliser les actions Cancel ONE et Cancel ALL, comprendre les remboursements et les envois comptables vers LaBoutik.
keywords: [ ticketing, billetterie, annulation, remboursement, admin ]
wiktags: [ ticketing, billetterie, annulation, remboursement, admin ]
authors: Jonas
---

Ce guide « how‑to » explique comment, côté *administration*, annuler et rembourser un billet précis ou une réservation
complète, et quels effets cela produit (e‑mail utilisateur, remboursement Stripe, lignes comptables négatives envoyées à
LaBoutik).

:::note
Insérez ici une capture d’écran de la liste des Tickets dans l’admin avec les actions de ligne.
:::

Pré‑requis

- Disposer d’un compte avec droits d’administration sur le tenant (lieu).
- Accéder à l’interface d’administration et à la liste des Tickets.

Important — Politique de remboursement

- La limite de remboursement est configurée sur chaque événement (champ « Délai de remboursement (jours) »).
- Au‑delà de cette limite, l’annulation ne déclenche pas de remboursement.
- Un ticket déjà scanné ne peut pas être annulé.

Configurer la limite de remboursement (événement)

1. Ouvrez l’admin > Événements.
2. Éditez l’événement concerné.
3. Renseignez le champ « Délai de remboursement (jours) » selon votre politique.
4. Enregistrez.

:::note
Insérez ici une capture d’écran du formulaire événement montrant le champ « Délai de remboursement (jours) ».
:::

Actions disponibles sur la liste des Tickets
Deux actions « row » sont proposées pour chaque ticket:

- Cancel ONE: annuler et rembourser ce billet seul.
- Cancel ALL: annuler et rembourser la réservation complète (tous les billets de la même réservation).

:::note
Insérez ici une capture d’écran zoomée sur la ligne d’un ticket avec le menu d’actions « Cancel ONE / Cancel ALL ».
:::

Annuler et rembourser un seul billet (Cancel ONE)

1. Ouvrez l’admin > Tickets.
2. Repérez le billet concerné et cliquez sur l’action « Cancel ONE ».
3. Confirmez l’opération si une fenêtre de confirmation s’affiche.
4. Le billet passe en statut « Annulé » (Canceled).

Résultat attendu

- Si la réservation était payée et que la limite de remboursement n’est pas dépassée, un remboursement partiel Stripe
  est déclenché correspondant au montant de ce billet.
- Une ligne comptable de remboursement est générée avec une quantité négative (−1) et transmise à LaBoutik.
- L’utilisateur reçoit un e‑mail automatique de confirmation d’annulation de billet.

:::note
Insérez ici une capture d’écran d’un ticket annulé et (optionnel) un extrait de message de succès.
:::

Annuler et rembourser toute la réservation (Cancel ALL)

1. Ouvrez l’admin > Tickets.
2. Sur l’un des billets de la réservation à annuler, cliquez sur « Cancel ALL ».
3. Confirmez l’opération.
4. Tous les billets de la réservation passent en « Annulé ».

Résultat attendu

- Si la réservation était payée et que la limite de remboursement n’est pas dépassée, un remboursement Stripe intégral
  est déclenché (sur le paiement original).
- Pour chaque ligne comptable validée, une ligne de remboursement est générée avec des quantités négatives (ex.: −qty)
  et envoyée à LaBoutik.
- L’utilisateur reçoit un e‑mail automatique de confirmation d’annulation de réservation.

Ce qui se passe en arrière‑plan

- Remboursement: déclenché côté Stripe (intégral ou partiel selon l’action et l’éligibilité).
- E‑mails:
    - Annulation de réservation: l’utilisateur reçoit un e‑mail de confirmation.
    - Annulation d’un billet: l’utilisateur reçoit un e‑mail spécifique au billet.
- Comptabilité / LaBoutik:
    - Une ligne de remboursement est créée avec quantité négative.
    - Le système envoie cette ligne à LaBoutik (via tâche asynchrone).

:::note
Insérez ici un schéma simple: Admin action → Stripe refund → E‑mail → Ligne comptable négative → LaBoutik.
:::

Dépannage

- Erreur « ticket scanné »: un billet scanné ne peut pas être annulé. Proposez une solution alternative selon votre
  politique.
- Date limite dépassée: l’action peut annuler sans remboursement; vérifiez la configuration « Délai de remboursement (
  jours) » de l’événement.
- Remboursement non visible: côté banque, l’affichage peut prendre quelques jours; vérifiez aussi le tableau de bord
  Stripe.
- Envoi LaBoutik: si LaBoutik est injoignable, l’envoi est automatiquement relancé (tâches avec retry). Consultez les
  logs pour le suivi.

Bonnes pratiques

- Informez clairement vos utilisateurs de la politique de remboursement (délais et cas non remboursables).
- En cas d’événement imminent, vérifiez le paramètre de délai de remboursement pour éviter les confusions.
