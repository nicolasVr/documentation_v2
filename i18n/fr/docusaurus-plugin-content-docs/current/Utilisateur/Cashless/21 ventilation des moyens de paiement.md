---
sidebar_position: 21
slug: ventilation
title: Ventilation des moyens de paiement
description: Changez le moyen de paiement en cas d'erreur
keywords: [ cashless, android, caisse engistreuse ]
wiktags: [ cashless, android, caisse engistreuse ]
authors: Jonas
---
# Ventilation des moyens de paiement

La ventilation est utilisée pour corriger une erreur de paiement lorsqu'un achat a été enregistré en utilisant **le mauvais moyen de paiement**.

:::danger 

Cela s'applique uniquement aux paiements en espèces, par carte de crédit et par chèque.
:::

Les modes de paiement par carte cashless (y compris les cadeaux cashless) ne sont pas modifiables, contrairement aux autres modes de paiement qui peuvent être mal sélectionnés au moment de l'encaissement.

N'hésitez pas à tester sur l'instance de démonstration : https://laboutik.demo-tibillet.ovh/

# Gestion dans l'espace d'administration

## 1) Allez dans l'onglet ventes :

![/img/cashless/ventilation/aller_ventes.jpg](/img/cashless/ventilation/aller_ventes.jpg)

## 2) Sélectionnez l'article et cliquez sur le mode de paiement :

![/img/cashless/ventilation/modif_article.jpg](/img/cashless/ventilation/modif_article.jpg)

Modifier le mode de paiement et sauvegarder.

## 3) Si la caisse a déjà été fermée, vous pouvez relancer le calcul de la caisse en allant dans le menu correspondant :

- Suivez la procédure ci-dessus, car même si la caisse est fermée, vous aurez toujours accès à ses ventes dans l'onglet « ventes » de la colonne de gauche, afin de corriger d'éventuelles erreurs.
- Cliquez sur la catégorie « Clôture de caisse » dans la colonne de gauche.
- Cliquez sur le bouton « reload » dans la section « action ».
- Le mode de paiement utilisé est maintenant mis à jour dans la caisse.
- Vous pouvez le vérifier en cliquant sur « ticketZ » dans la section « action ».

![/img/cashless/ventilation/reload_cloture.jpg](/img/cashless/ventilation/reload_cloture.jpg)

:::note

Avertissement : Il est interdit de supprimer un article vendu, car il s'agit d'une pratique illégale. Il est préférable d'ajouter un commentaire sur l'article concerné, qui sera pris en compte par le comptable.

Pour les remboursements, voir la section Remboursement.
:::

# Gestion sur terminaux 

Vous pouvez également gérer la ventilation des moyens de paiement directement sur le terminal **si votre carte primaire dispose de l'option « Gestionnaire »** (voir carte primaire).

Cette fonctionnalité vous permet de rectifier les moyens de paiement en temps réel, sans avoir besoin d'accéder à un ordinateur.

<video width="100%" controls src="/img/ventilation.mp4"></video>

:::note

Ce cas est pratique pour changer le mode de paiement pour l'ensemble de la commande. Toutefois, si le changement ne concerne qu'un seul article, il doit être effectué en utilisant la première méthode.
:::
