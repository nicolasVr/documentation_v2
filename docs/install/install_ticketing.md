---
sidebar_position: 100
slug: docker_install
title: Self hosted server
description: Installation de la billetterie fédéré via Docker.
keywords: [ cashless, billetterie, ticketing ]
wiktags: [ cashless, billetterie, ticketing ]
authors: jonas
---

# Self-hosted TiBillet

:::danger

Since January 1, 2018, in order to combat VAT fraud, all VAT-registered professionals recording
customer payments using one of these software or systems are required to use secure, certified hardware.

A measure enshrined in
[Article 286 3° bis of the General Tax Code](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042914666)
and initially stemming from the 2016 Finance Act,
when April became involved in promoting and defending open-source
software with cashiering functions.

If you're using TiBillet's SaaS model, you don't need to worry about any of this : We provide you with the certificate.
Contact us !

But I imagine that if you're here, it's to install it yourself: here you are informed!

More information here (in french) :

- https://www.economie.gouv.fr/entreprises/professionnels-logiciels-caisse
- https://www.april.org/reglementation-des-systemes-de-caisse-les-logiciels-libres-de-mieux-en-mieux-pris-en-compte-par-berc
- https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042914666

:::

# Engines

Tibillet is a software suite composed of several interoperable building blocks. The engines are :

- [Fedow](https://github.com/TiBillet/Fedow) : Federated and open wallet, the federation engine. A blockchain to share membership assets, local currencies and
  time for several Lespass and LaBoutik instances.

- [Lespass](https://github.com/TiBillet/Lespass): Ticketing, membership and landing page engines. Usefull to refill online with self scanned qrcode unique on each card.

- [LaBoutik](https://github.com/TiBillet/LaBoutik): Cash register, cashless system with RFID / NFC chip and order-taking system.

