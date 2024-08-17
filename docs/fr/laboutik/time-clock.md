---
title: Badgeuse
description: Badgeuse, pointage, comptage, ouverture de porte avec les cartes NFC.
keywords: [badgeuse, badge, pointeuse, access card, cashless, billetterie, ticketing, cashback, stripe, badge inter-lieux, dokos]
tags: [badgeuse, badge, access card, cashless, billetterie, ticketing, cashback, stripe,  badge inter-lieux, dokos]
---

# Badgeuse

Un système de badgeuse a été développé pour comptabiliser des passages à un point donné. Les cas d'usages sont multiples, de la simple présence pour un co working à la comptabilisation de temps d'utilisation d'un espace :

- Accès à un espace (Salle d'escalade, de répétition ou danse...)
- Comptage de temps d'utilisation d'un espace (Fablab, salle de réunion, salle de formation, etc.)
- Acte de présence
- Décompte de monnaie temps (ex: 1h de salle de réunion = 1 jeton)
- Ouverture de porte (besoin d'un webhook vers une serrure connecté)

## Configuration

Activez l'option dans le menu de configuration. Cela va créer l'asset "Badgeuse" et l'article correspondant.

![Config Badge](/media/screenshots/time-clock/activation.jpg)

Vous pouvez desormais ajouter l'article "Badger" dans n'importe quel point de vente.

![Config Badge](/media/screenshots/time-clock/outlet.jpg)

Pour plus de clarté, vous pouvez désactiver "Afficher les prix" si votre point de vente ne comprend que l'article "Badger"

## Action !

Si vous avez créé un nouveau point de vente pour la badgeuse, pensez à lier ce point de vente aux cartes primaires.

![Config Badge](/media/screenshots/time-clock/terminal.jpg)

Pour badger une carte, selectionner la case "Badger", validez, puis scannez la carte.

## Rapport

Sur la page principale (Dashboard), vous trouverez le lien vers les rapports de badgeage. 
Vous pouvez aussi y acceder via l'adresse `https://<URL>/rapport/badgeuse/`

![Config Badge](/media/screenshots/time-clock/report.jpg)

Les passages sont classé par paire d'entrée / sortie.

## Mutualisation avec FEDOW

Une seule carte NFC pour plusieurs lieux, c'est possible !
Vous pouvez brancher votre Badgeuse sur FEDOW et partager ainsi un même système de badgeage avec d'autres tiers lieux.
Une fois la connexion réalisée, les passages seront enregistrés dans la blockchain FEDOW.

Rejoignez une fédération TiBillet/Fedow, configurez l'asset de badge comme fédéré, et vous pourrez le retrouver dans votre instance cashless.

Configurez l'article "Badger" sur l'asset fédéré. Dans le menu Article/Special :

![Config Badge](/media/screenshots/time-clock/fedow-asset.jpg)

Vous pouvez maintenant badger une carte, et les passages seront enregistrés dans la blockchain FEDOW :

![Config Badge](/media/screenshots/time-clock/fedow-report.jpg)

## Aller plus loin avec Dokos

Vous pouvez utiliser TiBillet en mode solo ou Fedow pour le dispositif du [Badge inter lieux](https://badge.tiers-lieux.org/).

Voir la configuration Dokos correspondante : [https://doc.dokos.io/federation-lieux/federation-de-lieux/api/](https://doc.dokos.io/federation-lieux/federation-de-lieux/api/)

## Contribution

Ces fonctionnalités ont été développées par, pour et avec l'aide de :

- [Coopérative Code Commun](https://codecommun.coop/)
- [Badge Inter Lieux](https://badge.tiers-lieux.org/)
- [La compagnie des tiers lieux](https://compagnie.tiers-lieux.org/)
- [Les communs des tiers lieux](https://adopteuncommun.communecter.org/#) 
- [Coopérative Baraka](https://www.cooperativebaraka.fr/)
- Simon Sarazin & [La Plume à Loup](https://laplumealoup.fr/)
- [Dokos](https://dokos.io/)
