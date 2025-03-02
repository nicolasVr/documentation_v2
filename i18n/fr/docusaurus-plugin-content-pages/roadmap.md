---
title: Fonctionnalités
description: Système de paiement sans contact, zéro espèce (cashless), de gestion d'évènement, de gestion de salle de restauration, d'engagement associatif et d'achat de billets en ligne … mais pas uniquement !
image: https://tibillet.org/img/logoTibMJ4300.png
keywords: [cashless, billetterie, ticketing]
wiktags: [cashless, billetterie, ticketing]
authors: jonas
---

# Fonctionnalités

Les check non cochés sont prévus et en cours de développement :

## Point de vente :

- [x] Points de vente et caisse enregistreuse espèce, carte bancaire et chèque.
- [x] Cashless de festival
- [x] Application Android
  - [x] [Appareil Sunmi](https://rfid.it/en/sunmi/4759-sunmi-v2s-android-pos-with-label-printer-gms-and-nfc.html) : V2s, D3 Mini, V3 Mix testés.
- [x] Boitier tactile
- [x] Ticket Z
- [x] Export compta CSV
- [x] Carte NFC Cashless
    - [x] Monnaie euros / Bénévoles / Cadeaux
      - [ ] Monnaie temps et non fiducaires
    - [x] Création de la monnaie locale à votre lieux en équivalent €
    - [x] Carte fédérée pour plusieurs lieux.
    - [x] Création d'une monnaie locale à l'échelle d'un territoire.
    - [ ] Borne de recharge cashless autonome
    - [ ] Lecteur NFC déporté ( pour utilisation avec de vieux ordiphones )
    - [ ] Monnaie locale existante (Doume, Graine, Ti4Sous ... etc )
    - [ ] Monnaie libre et cryptomonnaie ( June, ether, etc ... )
- [ ] TPE Carte bancaire
- [ ] Gestion des stocks
- [x] [Plan DIY en open hardware](https://tibillet.org/fr/docs/category/diy/)
- [ ] Export compta Odoo & Dokos
- [ ] Balance connectée / vente de vrac
- [ ] Vente en ligne, Click & Collect
- [x] Cashback cashless 
- [x] Point de fidélité 
- [ ] [Kiosque](https://rfid.it/en/sunmi/52-sunmi-k2-kiosk.html) pour recharge cashless autonome.
- [x] [Tiroir caisse Sunmi](https://rfid.it/en/sunmi/4755-sunmi-max-cash-drawer-9-24v.html)
- [x] Imprimantes [Espon TM20](https://www.epson.eu/fr_EU/produits/commerce/imprimantes-pour-points-de-vente/imprimantes-pc-pos/epson-tm-t20-s%C3%A9rie/p/9450)
- [ ] Imprimantes [Sunmi](https://rfid.it/en/sunmi/84-sunmi-58mm-cloud-printer.html)
- [ ] Tireuse à bière autonome


## Gestion de prise de commande pour restauration

- [x] Prise de commande pour serveur.se.s. en salle ( app android & Pi3 )
- [x] Impressions des tickets de commande en cuisine/bar
- [x] Ecran de validation et de suivi de commandes (Payée/Prête/Servie/En Attente)
- [x] Mode "Gerant" pour annulation de commande
- [ ] Buzzer de table
- [ ] Prise de commande et paiement par le client à table / QrCode System
- [ ] Borne de prise de commande autonome

## Adhésion & abonnement

- [x] Abonnement et adhésion
- [x] Carte de fidélité
- [x] Paiement récurrent mensuel et annuel
- [x] Export Odoo
- [x] Carte NFC pour info adhésion / abonnement
- [x] Badgdeuse entrée/sortie
- [ ] Cowdfunding, Don Tips
- [x] Newsletter & blog 
  - [x] [Ghost](https://ghost.org/)
  - [ ] Brevo
- [ ] Export ERP :
  - [x] Paheko (via webhook)
  - [ ] [Dokos](https://www.dokos.io/fr)
  - [ ] Odoo

## Billetterie, agenda & reservation

- [x] Site web "Landing Page"
- [x] Vente de billet en ligne
- [x] Reservation gratuite
- [x] Prix préférentiel lié à un abonnement ou une adhésion
- [x] Agenda culturel fédéré
- [x] Webhook
- [ ] Intégration site extérieur (iframe)
- [x] Agenda participatif
- [ ] Reservation avec validation préalable
- [ ] Reservation d'espaces (co-working)
- [ ] Co-voiturage
- [ ] Fediverse
- [ ] Aggregateur d'évènement extérieur sur un territoire (Facebook, OpenAgend, Mobilizon etc ..)

## Gestion de planning et de projets

- [x] Monnaie temps de valorisation de bénévolat
- [x] Liaison tache / évènement pour gestion bénévole
- [ ] Gestion planning bénévole
  - [ ] Interop' [Noé](https://get.noe-app.io/)
  - [ ] Interop' [Oceco](https://oce.co.tools/)
- [ ] Gestion financement de projet ( cf crowdfunding )
- [ ] Liaison co-remuneration
  - [ ] Interop' [Loot](https://loot-project.gitlab.io/userguide/)

## Fédération

- [x] Une instance TiBillet pour plusieurs lieux
- [x] Une monnaie fédérée avec Stripe Connect
- [x] Abonnement pour plusieurs lieux
- [ ] [Badge inter lieux](https://doc.dokos.io/federation-lieux)