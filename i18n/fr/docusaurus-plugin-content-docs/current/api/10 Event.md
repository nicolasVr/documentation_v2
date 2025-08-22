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
- organizer (object): Informations de l'organisation (Configuration du tenant), ex: { "@type": "Organization", "name": "…" }.
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


## Créer / Mettre à jour un évènement (API)

Les opérations de création et de modification d’évènements se font via les endpoints de EventsViewSet.

- Création: POST /api/events/
- Modification complète: PUT /api/events/{uuid}/
- Modification partielle: PATCH /api/events/{uuid}/

Permissions et authentification:
- GET list/retrieve sont publics.
- POST/PUT/PATCH nécessitent une clé API valable avec le droit sur le basename "event" et un utilisateur admin du tenant.
- Utilisez l’entête HTTP suivant: Authorization: Api-Key VOTRE_CLE_API

Corps de requête (schema.org):
- name (string) — Nom de l’évènement.
- startDate (datetime ISO 8601) — Date/heure de début. Exemple: 2025-12-21T18:30:00+01:00.
- endDate (datetime ISO 8601, optionnel) — Date/heure de fin.
- disambiguatingDescription (string, optionnel) — Courte description.
- description (string, optionnel) — Description longue en texte.
- image (url string, optionnel) — URL d’une image à télécharger et associer à l’évènement.
- location (object Place, optionnel) — Objet avec address (PostalAddress) et éventuellement geo.
  - address.streetAddress (string)
  - address.addressLocality (string)
  - address.postalCode (string)
  - address.addressCountry (string, code ou nom)
  - address.addressRegion (string, optionnel)
  - name (string, optionnel) — Nom du lieu
  - geo.latitude / geo.longitude (number, optionnel)
- superEvent (string, optionnel) — UUID ou slug d’un évènement parent. Si renseigné, l’évènement créé devient un « enfant » (catégorie ACTION forcée par le modèle, réservation facile activée).

Notes:
- Vous pouvez créer des évènements sans enfants (ne renseignez pas superEvent).
- Pour créer un créneau/action rattaché à un évènement parent, renseignez superEvent avec l’uuid ou le slug du parent.
- PATCH permet d’envoyer uniquement les champs à modifier.
- La réponse utilise le serializer de lecture (EventSerializer) et respecte le format schema.org: le JSON renvoyé inclut "@context", "@type": "Event", etc.

### Exemple de création

Payload JSON typique:

```json
{
  "name": "Atelier réparation vélo",
  "startDate": "2025-10-05T14:00:00+02:00",
  "endDate": "2025-10-05T17:00:00+02:00",
  "disambiguatingDescription": "Apportez votre vélo !",
  "description": "Atelier collaboratif pour apprendre à réparer son vélo.",
  "image": "https://exemple.tld/media/images/atelier-velo.jpg",
  "location": {
    "@type": "Place",
    "name": "La Maison du Vélo",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 rue des Outils",
      "addressLocality": "Rennes",
      "postalCode": "35000",
      "addressCountry": "FR",
      "addressRegion": "Bretagne"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 48.117, "longitude": -1.677 }
  }
}
```

bash (curl):

```bash
curl -X POST "https://{votre_domaine}.tibillet.coop/api/events/" \
  -H "Content-Type: application/json" \
  -H "Authorization: Api-Key ${API_KEY}" \
  -d '{
    "name": "Atelier réparation vélo",
    "startDate": "2025-10-05T14:00:00+02:00",
    "endDate": "2025-10-05T17:00:00+02:00",
    "disambiguatingDescription": "Apportez votre vélo !",
    "description": "Atelier collaboratif pour apprendre à réparer son vélo.",
    "image": "https://exemple.tld/media/images/atelier-velo.jpg",
    "location": {
      "@type": "Place",
      "name": "La Maison du Vélo",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 rue des Outils",
        "addressLocality": "Rennes",
        "postalCode": "35000",
        "addressCountry": "FR",
        "addressRegion": "Bretagne"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 48.117, "longitude": -1.677 }
    }
  }'
```

JavaScript (fetch):

```javascript
const url = "https://{votre_domaine}.tibillet.coop/api/events/";
const payload = {
  name: "Atelier réparation vélo",
  startDate: "2025-10-05T14:00:00+02:00",
  endDate: "2025-10-05T17:00:00+02:00",
  disambiguatingDescription: "Apportez votre vélo !",
  description: "Atelier collaboratif pour apprendre à réparer son vélo.",
  image: "https://exemple.tld/media/images/atelier-velo.jpg",
  location: {
    "@type": "Place",
    name: "La Maison du Vélo",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 rue des Outils",
      addressLocality: "Rennes",
      postalCode: "35000",
      addressCountry: "FR",
      addressRegion: "Bretagne"
    },
    geo: { "@type": "GeoCoordinates", latitude: 48.117, longitude: -1.677 }
  }
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Api-Key " + process.env.API_KEY
  },
  body: JSON.stringify(payload)
})
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
```

Python (requests):

```python
import os
import requests

url = "https://{votre_domaine}.tibillet.coop/api/events/"
headers = {
    "Authorization": f"Api-Key {os.environ['API_KEY']}",
    "Content-Type": "application/json",
}
payload = {
    "name": "Atelier réparation vélo",
    "startDate": "2025-10-05T14:00:00+02:00",
    "endDate": "2025-10-05T17:00:00+02:00",
    "disambiguatingDescription": "Apportez votre vélo !",
    "description": "Atelier collaboratif pour apprendre à réparer son vélo.",
    "image": "https://exemple.tld/media/images/atelier-velo.jpg",
    "location": {
        "@type": "Place",
        "name": "La Maison du Vélo",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 rue des Outils",
            "addressLocality": "Rennes",
            "postalCode": "35000",
            "addressCountry": "FR",
            "addressRegion": "Bretagne"
        },
        "geo": {"@type": "GeoCoordinates", "latitude": 48.117, "longitude": -1.677}
    }
}
resp = requests.post(url, headers=headers, json=payload, timeout=30)
print(resp.status_code)
print(resp.json())
```

### Exemple de création d’un enfant (catégorie ACTION) via superEvent

```bash
curl -X POST "https://{votre_domaine}.tibillet.coop/api/events/" \
  -H "Content-Type: application/json" \
  -H "Authorization: Api-Key ${API_KEY}" \
  -d '{
    "name": "Créneau bénévole 10h-12h",
    "startDate": "2025-10-06T10:00:00+02:00",
    "endDate": "2025-10-06T12:00:00+02:00",
    "superEvent": "<UUID_ou_SLUG_DU_PARENT>"
  }'
```

Le champ superEvent peut être l’UUID ou le slug de l’évènement parent. Le modèle force automatiquement la catégorie ACTION et active la réservation facile pour l’enfant.

### Exemple de mise à jour (PATCH)

bash (curl):

```bash
curl -X PATCH "https://{votre_domaine}.tibillet.coop/api/events/{uuid}/" \
  -H "Content-Type: application/json" \
  -H "Authorization: Api-Key ${API_KEY}" \
  -d '{
    "description": "Texte mis à jour",
    "endDate": "2025-10-05T18:00:00+02:00"
  }'
```

JavaScript (fetch):

```javascript
await fetch("https://{votre_domaine}.tibillet.coop/api/events/{uuid}/", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Api-Key " + process.env.API_KEY
  },
  body: JSON.stringify({
    description: "Texte mis à jour",
    endDate: "2025-10-05T18:00:00+02:00"
  })
});
```

Python (requests):

```python
import os
import requests

url = "https://{votre_domaine}.tibillet.coop/api/events/{uuid}/"
headers = {
    "Authorization": f"Api-Key {os.environ['API_KEY']}",
    "Content-Type": "application/json",
}
updates = {
    "description": "Texte mis à jour",
    "endDate": "2025-10-05T18:00:00+02:00"
}
resp = requests.patch(url, headers=headers, json=updates, timeout=30)
print(resp.status_code)
print(resp.json())
```

Bonnes pratiques:
- Utilisez des dates/heures ISO 8601 avec timezone (offset) pour éviter les ambiguïtés.
- Conservez l’Authorization: Api-Key secrète; elle est liée à un tenant et à des permissions spécifiques.
- En cas d’erreur 400, les détails de validation par champ sont retournés.
