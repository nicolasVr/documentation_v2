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

# Demonstration

:::caution
TiBillet development is very active. These demo instances are “nighty builds”, i.e. development versions.
Instances may also be under maintenance. If you have any questions
don't hesitate to contact us [e-mail](mailto:contact@tibillet.re), sur [Discord](https://discord.gg/ecb5jtP7vY)
ou [Matrix](https://matrix.to/#/#tibillet:tiers-lieux.org).
:::

:::info
To test payment on Stripe, use the bank card of the galaxy's greatest backpacker:

- Douglas ADAM
- 4242 4242 4242 4242
- 02/42
- 424
  :::


## Events & Ticketing : [https://lespass.demo.tibillet.org/](https://lespass.demo.tibillet.org/)

:::danger
Ticketing is currently being redesigned. Expected release: end 2024.
The demo instance is not 100% functional, so please check back from time to time :)
:::

## Administration & My Account access : [https://lespass.demo.tibillet.org/qr/c2b2400c-1f7e-4305-b75e-8c1db3f8d113/](https://lespass.demo.tibillet.org/qr/c2b2400c-1f7e-4305-b75e-8c1db3f8d113/)

## Memberships : [https://lespass.demo.tibillet.org/memberships/](https://lespass.demo.tibillet.org/memberships/)

For complex and conditional forms, we've integrated [Formbricks](https://formbricks.com/).

Feel free to test with “Membership with Formbricks”.



## LaBoutik - Cashier/ Cashless : [https://laboutik.demo.tibillet.org/](https://laboutik.demo.tibillet.org/)

To view the cashier interface, click on “View site” on the administration page.

![maq2-420.jpg](/img/demo/maq2-420.jpg)

## I scan the QrCode on my cashless card : [https://lespass.demo.tibillet.org/qr/c2b2400c-1f7e-4305-b75e-8c1db3f8d113/](https://lespass.demo.tibillet.org/qr/c2b2400c-1f7e-4305-b75e-8c1db3f8d113/)

In the LaBoutik interface, this card corresponds to "Client 1".

The page we arrive on after a qrcode allows us to recharge our wallet, see our memberships and declare a lost card:

![cartes.jpg](/img/demo/cartes.jpg)

## Fedow - Federation creation : [https://fedow.demo.tibillet.org/dashboard/](https://fedow.demo.tibillet.org/dashboard/)

A piggy bank card, a coin and a membership can be used at one or more locations. This is known as a federation of venues.

![fedow_beta.jpg](/img/demo/fedow_beta.jpg)
