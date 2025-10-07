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




## Nouvelles routes

Ces routes complètent les endpoints existants et reflètent les filtres ajoutés côté API.

```
GET /api/events/future/   # évènements futurs (à partir de J-1), uniquement les parents (sans parent)
GET /api/events/actions/  # évènements de catégorie ACTION qui ont un parent non nul
```

- /api/events/future/ retourne les évènements publiés dont la date de début est supérieure ou égale à J-1 et sans parent (parents seulement).
- /api/events/actions/ retourne les évènements publiés de catégorie ACTION avec un parent (sous-évènements/créneaux).

## Champs additionnels (compatibles schema.org)

De nouveaux champs sont exposés par l'API sans modifier les champs existants.

- image (url): URL de l'image de l'évènement si disponible (fallback sur l'adresse ou la configuration si nécessaire).
- location (object): Objet Place contenant l'adresse postale (PostalAddress) et éventuellement les coordonnées GPS (GeoCoordinates).
- organizer (object): Informations de l'organisation (Configuration du tenant), ex: ```{ "@type": "Organization", "name": "…" }```.
- childrens (array): Liste des sous-évènements (enfants) publiés d'un évènement parent, avec pour chacun: uuid, name, slug, startDate, endDate, url.

### Exemple (extrait)

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "uuid": "…",
  "name": "Journée Bénévolat",
  "startDate": "2025-01-01T10:00:00+01:00",
  "url": "https://exemple.tibillet.coop/event/journee-benevolat-250101-1000/",
  "image": "https://exemple.tibillet.coop/media/images/evt.jpg",
  "location": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 rue de la Paix",
      "addressLocality": "Paris",
      "postalCode": "75001",
      "addressCountry": "FR"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 48.866, "longitude": 2.331 }
  },
  "organizer": { "@type": "Organization", "name": "LesPass" },
  "childrens": [
    { "uuid": "…", "name": "Créneau 10h-12h", "slug": "…", "startDate": "…", "endDate": "…", "url": "…" }
  ]
}
```
