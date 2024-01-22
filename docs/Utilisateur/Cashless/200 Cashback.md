---
sidebar_position: 200
slug: cashback
title: Cashback
description: Récompensez les recharges en ligne
keywords: [cashless, billetterie, ticketing, cashback, stripe]
wiktags: [cashless, billetterie, ticketing, cashback, stripe]
authors: jonas
---

## Récompensez les recharges de sommes importantes en ligne.

Nous avons implémenté un système de cashback en token cadeau suite à la demande de nos clients.

L'idée est d'encourager les personnes à effectuer eux même leurs rechargements en ligne pour soulager les points
d'acceuil et de rechargement cashless d'un site.

Dans l'administration de votre page cashless, allez dans "Configuration Générale", puis sur l'onglet "CASHBACK".
Indiquez la somme à partir de laquelle la récompense s'active, la valeur de la récompense, puis activez la case "Activez le cashback pour les rechargements".
Enfin, validez avec le bouton "Enregistrer".

Résultat : A chaque rechargement supérieur au montant prévu, des tokens "Cadeau" sont crédités sur la carte.

À noter que ces tokens "Cadeau" sont considéré différemment par la comptabilité et ne rentrent pas dans les
chiffres du calcul du bénéfice (même monnaie que pour les bénévoles, par exemple).

### Exemple :

Par exemple :

- Cashback start = 50
- Cashback value = 2.50

Si la personne recharge 55€, elle gagne 2.50 en cadeau.
Si elle recharge 101€, elle gagne 5 en cadeau (x2).
