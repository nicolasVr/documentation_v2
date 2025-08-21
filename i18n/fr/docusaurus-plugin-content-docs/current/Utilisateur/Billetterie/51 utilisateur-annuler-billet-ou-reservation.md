---
sidebar_position: 51
slug: user_cancel_refund_ticket_or_reservation
title: Annuler une réservation ou un billet (côté Utilisateur)
description: Comment annuler votre réservation complète ou un billet unique depuis « Mon Compte », et comprendre les remboursements.
keywords: [ ticketing, billetterie, annulation, remboursement, utilisateur ]
wiktags: [ ticketing, billetterie, annulation, remboursement, utilisateur ]
authors: Jonas
---

Ce guide explique, étape par étape, comment annuler une réservation complète ou un billet unique depuis votre espace «
Mon Compte », et ce qu’il se passe côté remboursement et notifications.

::::note
Insérez ici une capture d’écran de la page « Mes réservations » avec le bouton « J'annule ma réservation » et le panneau
ticket.
::::

## Pré‑requis

- Avoir créé un compte et être connecté.
- Avoir au moins une réservation visible dans « Mon Compte » > « Mes réservations ».

## Important à savoir (politique de remboursement)

- Les remboursements sont possibles jusqu’à la limite configurée sur l’événement.
- Cette limite est définie par l’organisateur dans le paramètre « Délai de remboursement (jours) » de l’événement.
  Au‑delà, l’annulation reste possible dans certains cas, mais sans remboursement.
- Un billet déjà scanné à l’entrée ne peut pas être annulé.

## Accéder à vos réservations

1. Ouvrez « Mon Compte ».
2. Cliquez sur « Mes réservations ».

## Annuler toute la réservation (tous les billets)

1. Sur la carte de la réservation, cliquez sur « J'annule ma réservation ».
2. Une fenêtre de confirmation s’ouvre.
    - Si l’événement est encore remboursable, le message l’indique (« Vous serez remboursé… »).
    - Sinon, la fenêtre précise que la date limite de remboursement est dépassée.
3. Confirmez. La carte de réservation est retirée de la page.
4. Vous recevez un e‑mail de confirmation d’annulation de réservation.
### Résultat attendu

- Statut de la réservation: passée en « Annulée ».
- Tous les billets associés passent en « Annulé ».
- Si la limite de remboursement n’est pas dépassée et que la réservation était payée, le remboursement est déclenché
  automatiquement vers la carte bancaire utilisée.
- Vous recevez un e‑mail de confirmation d’annulation.

::::note
Insérez ici une capture d’écran de la fenêtre de confirmation d’annulation.
::::

## Annuler un seul billet (sans annuler toute la réservation)

1. Ouvrez les détails de la réservation puis le billet concerné (accordéon « Ticket … »).
2. Cliquez sur « Annuler ce billet ».
3. Confirmez dans la fenêtre SweetAlert.
4. La ligne du billet est supprimée de la liste.
5. Vous recevez un e‑mail de confirmation d’annulation de billet.

### Résultat attendu

- Le billet passe en « Annulé ».
- Si la limite de remboursement n’est pas dépassée et que le billet était payé, un remboursement partiel est déclenché
  pour le montant du billet.
- Vous recevez un e‑mail de confirmation d’annulation de billet.
- Le reste des billets de la même reservation restent valides.

## Notes techniques (pour compréhension)

- La fenêtre de confirmation s’appuie sur htmx (hx-confirm) et SweetAlert pour une expérience uniforme.
- Les e‑mails de confirmation sont envoyés automatiquement après annulation.
- Les mouvements comptables sont gérés côté système; en cas de remboursement, une ligne comptable négative (avoir) est
  transmise à LaBoutik.

::::note
Insérez ici une capture d’écran de l’accordéon billet avec le bouton « Annuler ce billet ».
::::

## Dépannage

- Le bouton d’annulation n’apparaît pas: vérifiez que vous êtes connecté et que le billet n’a pas été scanné.
- Remboursement non reçu: selon votre banque, l’apparition sur le relevé peut prendre quelques jours. Si besoin,
  contactez l’organisateur.