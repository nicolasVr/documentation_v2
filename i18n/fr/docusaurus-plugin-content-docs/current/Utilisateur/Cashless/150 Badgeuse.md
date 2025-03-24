---
sidebar_position: 150
slug: badge
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

![Config Badge](/img/cashless/badge/badge1.jpg)

Vous pouvez desormais ajouter l'article "Badger" dans n'importe quel point de vente.

![Config Badge](/img/cashless/badge/badge2.jpg)

Pour plus de clarté, vous pouvez désactiver "Afficher les prix" si votre point de vente ne comprend que l'article "Badger"

## Attention !

Si vous avez créé un nouveau point de vente pour la badgeuse, pensez à l'ajouter aux point de vente gérés par vos cartes primaires sinon vous n'y aurez pas accès.
Pour ce faire rendez-vous dans le menu "Cartes primaires" :
- cliquez sur le membre à qui vous souhaitez donner l'accès.
- selectionnez badgeuse dans le champ "Point de vente*"
- Enregistrez

![Config Badge](/img/cashless/badge/vuecashless_pdv_badgeuse.jpg)

Pour badger une carte, dans votre interface de vente, selectionnez l'article "Badger", validez, puis scannez la carte.

## Rapport

Sur la page principale de votre administration (Dashboard), vous trouverez le lien vers les rapports de badgeage. 
Vous pouvez aussi y accéder via l'adresse `https://<URL>/rapport/badgeuse/`

![Config Badge](/img/cashless/badge/rapport_badgeuse.jpg)

Les passages sont classé par paire d'entrée / sortie.

## Mutualisation avec FEDOW

Une seule carte NFC pour plusieurs lieux, c'est possible !
Vous pouvez brancher votre Badgeuse sur FEDOW et partager ainsi un même système de badgeage avec d'autres tiers lieux.
Une fois la connexion réalisée, les passages seront enregistrés dans la blockchain FEDOW.

Rejoignez une fédération TiBillet/Fedow, configurez l'asset de badge comme fédéré, et vous pourrez le retrouver dans votre instance cashless.

Configurez l'article "Badger" sur l'asset fédéré. Dans le menu "Article" onglet "Special" :

![Config Badge](/img/cashless/badge/config_asset_fedow.jpg)

Vous pouvez maintenant badger une carte, et les passages seront enregistrés dans la blockchain FEDOW :

![Config Badge](/img/cashless/badge/rapport_badgeuse_fedow.jpg)

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
