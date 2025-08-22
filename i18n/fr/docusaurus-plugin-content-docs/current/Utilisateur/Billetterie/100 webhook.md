---
sidebar_position: 100
slug: webhook
title: Webhook
description: Envoyer un POST pour chaque réservation ou adhésion validée.
keywords: [ticketing, billetterie, webhook, api]
wiktags: [ticketing, billetterie, webhook, api]
authors: Jonas
---

Il est possible de configurer des webhooks après chaque évènement réalisé sur la billetterie dans l'interface d'administration.

Pour chaque webhook, la dernière réponse HTTP est visible dans le champ « Last response ».

Types de webhooks pris en charge :
- Reservation (réservation confirmée)
- Adhésion (abonnement/adhésion confirmée)

## 1) Webhook Reservation

Le webhook « Reservation » se déclenche à chaque validation de réservation gratuite ou payante, au même moment que l'envoi des billets par e‑mail.

Payload envoyé :
```json title="Reservation (payload)"
{
  "object": "reservation",
  "uuid": "<uuid de la réservation>",
  "state": "<statut interne de la réservation>",
  "datetime": "<date/heure de création>"
}
```

Vous pouvez ensuite récupérer plus d'informations sur la réservation via l'API standard : [/docs/api/reservations](/docs/api/reservations)

## 2) Webhook Adhésion

Le webhook « Adhésion » est envoyé lorsque l’adhésion est payée et donc considérée comme valide.
- Concrètement, il est déclenché lorsque l'adhésion possède une date d'échéance (deadline) calculée. Le champ `is_valid` contenu dans le payload reflète la validité au moment de l'envoi (true si `deadline > maintenant`).

Cas particulier LaBoutik :
- Lors d'une adhésion créée depuis LaBoutik, le webhook peut être envoyé deux fois :
  1) immédiatement après la création, sans e‑mail ni nom/prénom. Le champ `email` contiendra alors une valeur de type `"Anonymous <num_de_carte>"` (avec `first_name`/`last_name` vides).
  2) une seconde fois lorsque l'utilisateur scanne le QR code de sa carte et lie son e‑mail, nom et prénom ; le webhook renvoie alors les informations personnelles mises à jour.

Payload envoyé (détaillé) :
```json title="Adhésion (payload simplifié)"
{
  "object": "membership",
  "pk": "<pk interne>",
  "uuid": "<uuid de l'adhésion>",
  "state": "<code d'origine de l'adhésion>",
  "state_display": "<libellé de l'origine (ex: LaBoutik, Admin, etc.)>",
  "datetime": "<date/heure de création>",
  "deadline": "<échéance de l'adhésion>",
  "email": "<email de l'adhérent ou 'Anonymous <num_carte>'>",
  "comment": "<commentaire>",
  "first_name": "<prénom>",
  "last_name": "<nom>",
  "pseudo": "<pseudo si renseigné>",
  "price_name": "<nom du tarif>",
  "price_uuid": "<uuid du tarif>",
  "product_name": "<nom du produit>",
  "product_uuid": "<uuid du produit>",
  "organisation": "<nom de l'organisation>",
  "organisation_id": "<uuid de l'organisation>",

  "user": "<uuid de l'utilisateur si lié>",
  "card_number": "<numéro de carte si anonyme>",
  "date_added": "<date d'ajout>",
  "last_action": "<dernière présence>",
  "last_contribution": "<date du dernier paiement>",
  "contribution_value": 25.0,
  "payment_method": "<code moyen de paiement>",
  "payment_method_name": "<libellé moyen de paiement>",
  "newsletter": true,
  "postal_code": 75000,
  "birth_date": "1990-01-01",
  "phone": "+33...",
  "is_valid": true,
  "asset_fedow": "<uuid fedow si lié>",
  "stripe_id_subscription": "<id stripe si abo>",
  "last_stripe_invoice": "<id facture stripe>",
  "member_name": "<Nom affiché de l'adhérent>",
  "product_img": "<URL image produit>",
  "option_generale": [
    {"uuid": "...", "name": "...", "description": "...", "poids": 0},
    {"uuid": "...", "name": "...", "description": "...", "poids": 1}
  ],
  "option_names": ["Option 1", "Option 2"]
}
```

Notes :
- Beaucoup de champs peuvent être `null`/vides selon les cas (ex: utilisateur anonyme, absence de produit, etc.).
- `is_valid` est true si la deadline est dans le futur (adhésion valide à l’instant T).
- `email` peut valoir `"Anonymous <num_carte>"` tant que l’e‑mail n’est pas lié.
- Les options sont fournies sous forme complète (`option_generale`) et sous forme de liste de noms (`option_names`).

### Récapitulatif des principaux champs (Adhésion)
- object: toujours "membership".
- pk / uuid: identifiants internes.
- state / state_display: origine de la création (Admin, Import, Paiement unique, Renouvellement auto, LaBoutik...).
- datetime: date de création de l’adhésion.
- deadline: échéance calculée de l’adhésion.
- is_valid: validité au moment de l’envoi (deadline > maintenant).
- email, first_name, last_name, pseudo: informations d’identité (peuvent être vides/anonymes).
- price_* / product_*: informations tarif/produit de l’adhésion.
- organisation / organisation_id: informations de l’organisation émettrice.
- payment_method / payment_method_name / contribution_value: informations de paiement.
- option_generale / option_names: options liées à l’adhésion.