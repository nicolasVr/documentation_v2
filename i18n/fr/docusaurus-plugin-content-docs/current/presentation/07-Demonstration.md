---
sidebar_position: 5
slug: demonstration
title: Démonstration
description: Instances de démonstration de la billetterie ( TiBillet/Event ) et de la caisse enregistreuse ( TiBillet/LaBoutik ) qui accepte les paiements en monnaie locale et/ou en cashless, et qui permet de gérer les commandes de buvette et de restauration.
image: /img/demo/maq2-420.jpg
keywords: [ cashless, billetterie, ticketing, monnaie locale, caisse enregistreuse, démonstration, festival, tiers-lieux ]
tags: [ cashless, billetterie, ticketing, monnaie locale, caisse enregistreuse, démonstration, festival, tiers-lieux ]
authors: jonas
---

# Démonstration

:::caution
Le développement de TiBillet est trés actif. Ces instances de démonstrations sont des "nighty build", c'est à dire des
versions de développement. Il se peut aussi que les instances soient en maintenance. Si vous avez des questions,
n'hésitez pas à nous contacter par [mail](mailto:contact@tibillet.re), sur [Discord](https://discord.gg/ecb5jtP7vY)
ou [Matrix](https://matrix.to/#/#tibillet:tiers-lieux.org).
:::

:::info
Pour tester le paiement sur Stripe, utilisez la carte bancaire du plus grand routard galactique :

- Douglas ADAM
- 4242 4242 4242 4242
- 02/42
- 424
  :::

## Lespass - Adhésion : [https://lespass.demo.tibillet.org/memberships/](https://lespass.demo.tibillet.org/memberships/)

![BilletDemo4_adhesion.jpg](/img/demo/BilletDemo4_adhesion.jpg)

## Lespass - Billetterie ( nighty build ) : [https://lespass.demo.tibillet.org/agenda/](https://lespass.demo.tibillet.org/agenda/)

:::danger
La Billetterie est en cours de redesign. Sortie prévue : fin 2024.
L'instance de démonstration n'est pas 100% fonctionnelle, n'hésitez pas à repasser de temps en temps :)
:::

![BilletDemo1.jpg](/img/demo/BilletDemo1.jpg)

## LaBoutik - Caisse enregistreuse / Cashless : [https://laboutik.demo.tibillet.org/](https://laboutik.demo.tibillet.org/)

Pour voir l'interface de caisse, cliquez sur "voir le site" de la page d'administration

![maq2-420.jpg](/img/demo/maq2-420.jpg)

## Je scanne le QrCode de ma carte tirelire : [https://lespass.demo.tibillet.org/qr/c2b2400c-1f7e-4305-b75e-8c1db3f8d113/](https://lespass.demo.tibillet.org/qr/c2b2400c-1f7e-4305-b75e-8c1db3f8d113/)

Dans l'interface LaBoutik, cette carte correspond à "Client 1".

La page sur laquelle nous arrivons après un qrcode permet de recharger sa tirelire, voir ses adhésions et déclarer sa
carte perdue :

![scan_qrcode_triptik.jpg](/img/demo/scan_qrcode_triptik.jpg)
![cartes.jpg](/img/demo/cartes.jpg)

## Fedow - Création de fédération : [https://fedow.demo.tibillet.org/dashboard/](https://fedow.demo.tibillet.org/dashboard/)

Une carte tirelire, une monnaie et une adhésion peuvent être utilisées dans un ou plusieurs lieux. On parle alors de
fédération de lieux.

![fedow_beta.jpg](/img/demo/fedow_beta.jpg)
