---
sidebar_position: 10
slug: events
title: API v2 — Events (schema.org/Event) & Addresses (schema.org/PostalAddress)
description: Semantic API v2 (schema.org) for events and postal addresses.
keywords: [schema.org, open data, api, event, postaladdress, json-ld]
authors: jonas
---

> Cette page documente la nouvelle API v2 sémantique. Elle remplace l’ancienne API héritée. Les exemples ci‑dessous utilisent les noms de propriétés de [schema.org](https://schema.org).

## Aperçu
- Base path (tenant): `/api/v2/`
- Authentification: en-tête `Authorization: Api-Key <votre_clé>`
- Format de réponse: JSON (schema.org‑like, proche JSON‑LD)
- Tests: `poetry run pytest -q tests/pytest`

## Ressource Event — schema.org/Event

### Endpoints
- `GET /api/v2/events/` — liste des évènements publiés
  - Retour non paginé: `{ "results": [Event, ...] }`
- `GET /api/v2/events/<uuid>/` — détail d’un évènement
- `DELETE /api/v2/events/<uuid>/` — suppression d’un évènement
- `POST /api/v2/events/<uuid>/link-address/` — lier une adresse postale
  - Corps: `{ "postalAddressId": <int> }` ou un objet `PostalAddress` (voir plus bas)

### Champs principaux (schema.org)
- Requis à la création: `name`, `startDate`
- Recommandés/optionnels: `endDate`, `maximumAttendeeCapacity`, `disambiguatingDescription`, `description`, `eventStatus`, `audience`, `keywords`, `url`, `sameAs`, `offers`, `additionalProperty`
- Catégorie sémantique:
  - `@type` (sous‑type schema.org, ex: `MusicEvent`) – mappé vers la catégorie interne
  - `additionalType` (libellé humain, ex: `Concert`, `Festival`, `Volunteering`) – mappé vers la catégorie interne
  - Règle: si la catégorie résolue est **ACTION** (Volunteering), alors `superEvent` est **obligatoire** (UUID de l’évènement parent).

### Exemple — création minimale
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
Réponse (201):
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "identifier": "<uuid>",
  "name": "API v2 — Test create",
  "startDate": "2025-12-20T19:00:00Z",
  "eventStatus": "https://schema.org/EventScheduled"
}
```

### Exemple — création étendue (capacité, statut, tags, règles d’offre, etc.)
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

### Lister (GET /events/)
```http
GET /api/v2/events/
Authorization: Api-Key <clé>
```
Réponse (200):
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

### Détail (GET /events/uuid/)
```http
GET /api/v2/events/<uuid>/
Authorization: Api-Key <clé>
```
Réponse (200):
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

### Supprimer (DELETE /events/uuid/)
```http
DELETE /api/v2/events/<uuid>/
Authorization: Api-Key <clé>
```
Réponse: `204 No Content`

### Lier une adresse (POST /events/event_uuid/link-address/)
Deux possibilités:
1) Lier une adresse existante par id
```json
{ "postalAddressId": 123 }
```
2) Créer & lier en une fois avec un objet PostalAddress
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
Réponse (200): l’Event mis à jour avec `location.address`.

---

## Ressource PostalAddress — schema.org/PostalAddress

### Endpoints
- `GET /api/v2/postal-addresses/` — lister (retour `{ "results": [...] }`)
- `GET /api/v2/postal-addresses/{id}/` — détail par id (interne)
- `POST /api/v2/postal-addresses/` — créer une adresse
- `DELETE /api/v2/postal-addresses/{id}/` — supprimer une adresse

### Exemple — création
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
Réponse (201):
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

### Liste (GET /postal-addresses/)
```http
GET /api/v2/postal-addresses/
Authorization: Api-Key <clé>
```
Réponse (200):
```json
{ "results": [ {"@type":"PostalAddress","streetAddress":"123 Rue de Test", "addressLocality":"Testville"} ] }
```

---

## Notes d’implémentation & mapping
- `maximumAttendeeCapacity` ↔︎ capacité (jauge)
- `offers.eligibleQuantity.maxValue` ↔︎ `max_per_user`
- `disambiguatingDescription` ↔︎ `short_description`
- `description` ↔︎ `long_description`
- `sameAs`/`url` ↔︎ `full_url` (si `sameAs` présent ⇒ évènement « externe »)
- `eventStatus`: `EventScheduled` si publié, `EventCancelled` sinon
- `audience`: `{audienceType:"private"}` si évènement privé
- `keywords` ↔︎ tags (créés si absents)
- `additionalProperty`:
  - `optionsRadio` / `optionsCheckbox` (listes de noms d’options)
  - `customConfirmationMessage`

## Tests (Poetry)
- Installer: `poetry install`
- Lancer: `poetry run pytest -q tests/pytest`
- L’ordre des tests Event est forcé: create → list → retrieve → link → delete.

:::caution
La documentation est en cours de rédaction.

N'hésitez pas à venir discuter avec nous sur **[Discord](https://discord.gg/7FJvtYx)** pour avoir plus d'informations !
:::
