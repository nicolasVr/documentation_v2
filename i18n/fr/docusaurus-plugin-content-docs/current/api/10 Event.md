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



---

## ✅ API v2 — Évènements & Adresses (mise à jour)

> Cette section remplace l’ancienne documentation ci‑dessus. Elle reflète exactement les routes présentes dans le code et couvertes par les tests (`tests/pytest`).

### Aperçu
- Base path (tenant) : `/api/v2/`
- Authentification : `Authorization: Api-Key <votre_clé>`
- Réponse : JSON (proche JSON‑LD / schema.org)
- Tests : `poetry run pytest -q tests/pytest`

### Endpoints Event (schema.org/Event)
- `GET /api/v2/events/` — liste les évènements publiés
  - Non paginé : `{ "results": [Event, ...] }`
- `GET /api/v2/events/{uuid}/` — récupère un évènement par UUID
- `POST /api/v2/events/` — crée un évènement (payload schema.org/Event)
- `DELETE /api/v2/events/{uuid}/` — supprime un évènement
- `POST /api/v2/events/{uuid}/link-address/` — lie une adresse postale à l’évènement
  - Corps : `{ "postalAddressId": <int> }` ou un objet `PostalAddress` (voir ci‑dessous)

Champs principaux acceptés à la création : `name` (requis), `startDate` (requis), `endDate`, `maximumAttendeeCapacity`, `disambiguatingDescription`, `description`, `eventStatus`, `audience`, `keywords`, `url`, `sameAs`, `offers`, `additionalProperty`.

Exemple — création minimale
```http
POST /api/v2/events/
Authorization: Api-Key <clé>
Content-Type: application/json
```
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "API v2 — Test create",
  "startDate": "2025-12-20T19:00:00Z"
}
```

Exemple — création étendue
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Concert",
  "startDate": "2025-12-20T19:00:00Z",
  "maximumAttendeeCapacity": 250,
  "disambiguatingDescription": "Soirée funk",
  "description": "Une soirée funk mémorable",
  "eventStatus": "https://schema.org/EventScheduled",
  "audience": {"@type":"Audience","audienceType":"private"},
  "keywords": ["Funk","Live"],
  "sameAs": "https://example.org/external-event",
  "offers": {
    "eligibleQuantity": {"maxValue": 4},
    "returnPolicy": {"merchantReturnDays": 7}
  },
  "additionalProperty": [
    {"@type":"PropertyValue","name":"optionsRadio","value":["Salle"]},
    {"@type":"PropertyValue","name":"customConfirmationMessage","value":"Merci pour votre réservation !"}
  ]
}
```

Lister
```http
GET /api/v2/events/
Authorization: Api-Key <clé>
```
Réponse (200)
```json
{
  "results": [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "identifier": "<uuid>",
      "name": "Concert",
      "startDate": "2025-12-20T19:00:00Z",
      "maximumAttendeeCapacity": 250,
      "eventStatus": "https://schema.org/EventScheduled",
      "keywords": ["Funk","Live"],
      "offers": {
        "@type": "Offer",
        "eligibleQuantity": {"@type":"QuantitativeValue","maxValue": 4},
        "returnPolicy": {"@type":"MerchantReturnPolicy","merchantReturnDays": 7}
      }
    }
  ]
}
```

Détail
```http
GET /api/v2/events/{uuid}/
Authorization: Api-Key <clé>
```
Réponse (200)
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "identifier": "<uuid>",
  "name": "Concert",
  "startDate": "2025-12-20T19:00:00Z",
  "location": {
    "@type": "Place",
    "address": {"@type":"PostalAddress", "streetAddress": "7 S. Broadway", "addressLocality": "Denver", "postalCode": "80209", "addressCountry": "US"}
  }
}
```

Lier une adresse
```http
POST /api/v2/events/{uuid}/link-address/
Authorization: Api-Key <clé>
Content-Type: application/json
```
Deux options :
1) `{ "postalAddressId": 123 }`
2) Objet `PostalAddress` :
```json
{
  "@type": "PostalAddress",
  "streetAddress": "42 Avenue des Tests",
  "addressLocality": "DevCity",
  "addressRegion": "DC",
  "postalCode": "42424",
  "addressCountry": "FR",
  "geo": {"latitude": 48.8566, "longitude": 2.3522}
}
```

### Endpoints PostalAddress (schema.org/PostalAddress)
- `GET /api/v2/postal-addresses/` — lister `{ "results": [...] }`
- `GET /api/v2/postal-addresses/{id}/` — détail par id (interne)
- `POST /api/v2/postal-addresses/` — créer
- `DELETE /api/v2/postal-addresses/{id}/` — supprimer

Exemple — création
```http
POST /api/v2/postal-addresses/
Authorization: Api-Key <clé>
Content-Type: application/json
```
```json
{
  "@type": "PostalAddress",
  "name": "Test Address",
  "streetAddress": "123 Rue de Test",
  "addressLocality": "Testville",
  "addressRegion": "TV",
  "postalCode": "99999",
  "addressCountry": "FR",
  "geo": {"latitude": 43.7, "longitude": 7.25}
}
```
Réponse (201)
```json
{
  "@type": "PostalAddress",
  "streetAddress": "123 Rue de Test",
  "addressLocality": "Testville",
  "addressRegion": "TV",
  "postalCode": "99999",
  "addressCountry": "FR",
  "geo": {"@type":"GeoCoordinates","latitude": 43.7, "longitude": 7.25}
}
```

---

### Notes de mapping (schema.org ⇄ interne)
- `maximumAttendeeCapacity` ⇄ jauge
- `offers.eligibleQuantity.maxValue` ⇄ `max_per_user`
- `disambiguatingDescription` ⇄ `short_description`
- `description` ⇄ `long_description`
- `sameAs`/`url` ⇄ `full_url` (si `sameAs` ⇒ évènement externe)
- `eventStatus` : `EventScheduled` si publié, `EventCancelled` sinon
- `audience` : `{audienceType:"private"}` pour un évènement privé
- `keywords` ⇄ tags (créés si absents)
- `additionalProperty` : `optionsRadio` / `optionsCheckbox` / `customConfirmationMessage`

### Vérification
Ces routes existent dans le code (`api_v2/urls.py`, `api_v2/views.py`) et sont testées par `tests/pytest/` :
- create/list/retrieve/delete d’Event
- link-address pour Event
- CRUD minimal de PostalAddress
