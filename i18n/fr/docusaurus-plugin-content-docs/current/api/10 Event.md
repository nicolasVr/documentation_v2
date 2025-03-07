---
sidebar_position: 10
slug: events
title: Évènements
description: Créez un évènement avec entrée libre.
keywords: [ cashless, billetterie, ticketing, cli, curl, python ]
wiktags: [ cashless, billetterie, ticketing, curl, python ]
authors: jonas
---

:::caution
La documentation est en cours de rédaction.

N'hésitez pas à venir discuter avec nous sur **[Discord](https://discord.gg/7FJvtYx)** pour avoir plus d'informations !
:::

```
GET /api/events/
GET /api/events/<uuid>/
```

| Item                      | type     | Requis | Exemple                                                   |
|---------------------------|----------|--------|-----------------------------------------------------------|
| @type                     | srt      | N      | event                                                     |
| @context                  | srt      | N      | https://schema.org                                                     |
| uuid                      | srt      | N      | uuid4                                                     |
| name                      | text     | Y      | 42ème anniversaire d'Adam                                 |
| slug                      | text     | Y      | 42eme-anniversaire-d-Adam                                 |
| startDate                 | datetime | Y      | 2029-12-21T18:30                                          |
| endDate                   | datetime | Y      | 2029-12-21T18:30                                          |
| disambiguatingDescription | text     | N      | Pas de panique !                                          |
| description               | text     | N      | Un dernier restaurant avant la fin du monde ?             |
| url                       | url      | N      | https://h2g2.tibillet.coop/event/42eme-anniversaire-d-Adam |
| eventStatus               | string   | N      | LIV                                                       |
| publicKeyPem              | string   | N      | LIV                                                       |


