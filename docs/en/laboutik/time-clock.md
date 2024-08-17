---
title: Time clock machine
description: Time clock machine, clocking, counting, door opening with NFC cards.
keywords: [badgeuse, badge, pointeuse, access card, cashless, billetterie, ticketing, cashback, stripe, badge inter-lieux, dokos, time clock, machine, time punch machine]
tags: [badgeuse, badge, access card, cashless, billetterie, ticketing, cashback, stripe,  badge inter-lieux, dokos, time clock, machine, time punch machine]
---

# Time clock machine

A time clocking system has been developed to count passages at a given point. There are multiple use cases, from simple validation of presence for co-working to recording time spent using a room :

- Access to a location (climbing, rehearsal or dance room, etc.)
- Counting time spent using a location (Fablab, meeting room, training room, etc.)
- Certificate of presence
- Time currency counts (ex: 1 hour of meeting room = 1 token)
- Door opening (need a webhook to a connected lock)

## Configuration

Enable the option in the setup menu. This will create the “Time-clock machine” asset and the corresponding item.

![Config Badge](/media/screenshots/time-clock/activation.jpg)

You can now add the "Time-clock machine" item to any point of sale.

![Config Badge](/media/screenshots/time-clock/outlet.jpg)

For greater clarity, you can deactivate "Show prices" if your point of sale only includes the "Time-clock machine" item

## Action !

If you have created a new point of sale for the Time Clock card reader, remember to link this point of sale to the primary cards.

![Config Badge](/media/screenshots/time-clock/terminal.jpg)

To punch a card, select the “Time-clock machine” box, validate, then scan the card.

## Report

On the main page (Dashboard), you will find the link to the time spend reports.
You can also access it via the address `https://<URL>/rapport/badgeuse/`

![Config Badge](/media/screenshots/time-clock/report.jpg)

Passages are sorted by entry/exit pair.

## Pooling with FEDOW

A single NFC card for several locations, it's possible!
You can connect your Time-clocking machine to FEDOW and thus share the same time system with other third parties.
Once the connection is made, the passages will be recorded in the FEDOW blockchain.

Join a TiBillet/Fedow federation, configure the time-clock asset as federated, and you will be able to find it in your cashless instance.

Configure the "Time-clock machine" item on the federated asset. In the Item/Special menu:

![Config Badge](/media/screenshots/time-clock/fedow-asset.jpg)

You can now punch a card, and the passages will be recorded in the FEDOW blockchain:

![Config Badge](/media/screenshots/time-clock/fedow-report.jpg)

## Go further with Dokos

You can use TiBillet in solo mode or Fedow for the (Inter-venue badge) [Badge inter lieux](https://badge.tiers-lieux.org/).

See the corresponding Dokos configuration: [https://doc.dokos.io/federation-lieux/federation-de-lieux/api/](https://doc.dokos.io/federation-lieux/federation-de-lieux/api/)

## Contribution

These features were developed by, for and with the help of :

- [Coopérative Code Commun](https://codecommun.coop/)
- [Badge Inter Lieux](https://badge.tiers-lieux.org/)
- [La compagnie des tiers lieux](https://compagnie.tiers-lieux.org/)
- [Les communs des tiers lieux](https://adopteuncommun.communecter.org/#) 
- [Coopérative Baraka](https://www.cooperativebaraka.fr/)
- Simon Sarazin & [La Plume à Loup](https://laplumealoup.fr/)
- [Dokos](https://dokos.io/)
